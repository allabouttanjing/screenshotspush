import { Dropbox } from 'dropbox';
import * as fs from 'fs';
import fetch from 'isomorphic-fetch';
import puppeteer from 'puppeteer';
import request from 'request';
import * as tmp from 'tmp';

import { login } from '../common/actions';
import { LaunchConfig } from '../common/config';
import { AccessToken } from '../common/private';

import { PathWeiboChat } from './constants';

interface FromUser {
  'id': number;
  'screen_name': string;
}
interface Message {
  'id': number;
  'from_user': FromUser;
  'media_type': 1 | 4; // 1: image, 4:audio
  'time': number;
  fids: number[];
}

interface QueryResult {
  lastReadMsgId: number;
  messages: Message[];
}

(async () => {
  const browser = await puppeteer.launch(LaunchConfig);
  const dbx = new Dropbox({ accessToken: AccessToken, fetch: fetch });

  await login(browser);

  function imageUrl(fid: number): string {
    return `https://upload.api.weibo.com/2/mss/msget?fid=${fid}&source=209678993&imageType=origin&ts=${
      Date.now() - 1000
    }`;
  }

  function audioUrl(fid: number): string {
    return `https://api.weibo.com/amrdata/${fid}?source=209678993`;
  }

  async function existsOnDropbox(path: string): Promise<boolean> {
    try {
      const metadata = await dbx.filesGetMetadata({ path: path });
      console.log(`[+]already exists: ${metadata.path_display}`);
      return true;
    } catch (e) {
      console.log(`[+]${path} doesn't exist`);
      return false;
    }
  }

  function processMessage(
    message: Message,
    headers: Record<string, string>
  ): void {
    const fromUser = message.from_user;
    const date = new Date(message.time * 1000);
    const dateStr = date.toISOString().slice(0, 10);
    const fids = message.fids;
    const fileNamePrefix = `${fromUser.id}-${fromUser.screen_name}-${message.time}`;
    switch (message.media_type) {
      case 1: // image
        fids.forEach((fid) => {
          const tmpFile = tmp.fileSync();
          let originalName = '';
          request
            .defaults({ jar: true })({
              url: imageUrl(fid),
              headers: headers,
            })
            .on('response', (response) => {
              const headers = response.headers;
              const parts = headers['content-disposition']?.split('filename=');
              originalName = !!parts
                ? parts[parts.length - 1].replace(/\"/g, '')
                : '';
            })
            .on('end', async () => {
              const fullPath = `${PathWeiboChat}/${dateStr}/${fileNamePrefix}-${fid}-${originalName}`;
              if (!(await existsOnDropbox(fullPath))) {
                try {
                  const response = await dbx.filesUpload({
                    path: fullPath,
                    contents: fs.readFileSync(`${tmpFile.name}`),
                  });
                  const name = response.name;
                  console.log(`[+]uploading image succeed: ${name}`);
                } catch (e) {
                  console.error(`[-]uploading image failed`);
                  console.error(e);
                }
              }
            })
            .pipe(
              fs.createWriteStream(tmpFile.name, {
                fd: tmpFile.fd,
              })
            );
        });
        break;
      case 4: // audio
        fids.forEach((fid) => {
          const tmpFile = tmp.fileSync();
          request
            .defaults({ jar: true })({
              url: audioUrl(fid),
              headers: headers,
            })
            .on('end', async () => {
              const fullPath = `${PathWeiboChat}/${dateStr}/${fileNamePrefix}-${fid}.mpeg`;
              if (!(await existsOnDropbox(fullPath))) {
                try {
                  const response = await dbx.filesUpload({
                    path: fullPath,
                    contents: fs.readFileSync(`${tmpFile.name}`),
                  });
                  const name = response.name;
                  console.log(`[+]uploading audio succeed: ${name}`);
                } catch (e) {
                  console.error(`[-]uploading audio failed`);
                  console.error(e);
                }
              }
            })
            .pipe(
              fs.createWriteStream(tmpFile.name, {
                fd: tmpFile.fd,
              })
            );
        });
    }
  }

  const chatUrl = 'https://api.weibo.com/chat/#/chat';
  const page = await browser.newPage();

  async function queryMessages(
    maxMsgId: number,
    count: number
  ): Promise<Message[]> {
    const json = await page.evaluate(
      (maxMsgId: string, count: number) => <any>window
          .fetch(
            `https://api.weibo.com/webim/groupchat/query_messages.json?convert_emoji=1&query_sender=1&count=${count}&id=3995755788489444&max_mid=${maxMsgId}&source=209678993&t=${Date.now()}`,
            {
              'headers': {
                'accept': 'application/json, text/plain, */*',
                'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
                'cache-control': 'no-cache',
                'pragma': 'no-cache',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
              },
              'referrer': 'https://api.weibo.com/chat/',
              'referrerPolicy': 'strict-origin-when-cross-origin',
              'body': null,
              'method': 'GET',
              'mode': 'cors',
              'credentials': 'include',
            }
          )
          .then((response) => response.json()),
      maxMsgId,
      count
    );
    return json['messages'];
  }

  // click 置顶
  await page.goto(chatUrl);
  await page.waitForSelector('.toptag');
  await page.click('.toptag');

  let lastQueryMsgMinId = 0;
  const count = 50;
  const intervalId = setInterval(async () => {
    const messages = await queryMessages(lastQueryMsgMinId, count);
    if (messages.length == 0) {
      console.log(`[+] No more messages. closing...`);
      clearInterval(intervalId);
      await browser.close();
      return;
    }
    lastQueryMsgMinId = messages.sort((m1, m2) => m1.id - m2.id)[0].id;
    console.log(
      `[+] Last msg id: ${lastQueryMsgMinId}, msg count: ${messages.length}`
    );

    const hasMedia = messages.some(
      (m) => m.media_type == 1 || m.media_type == 4
    );
    console.log(
      `[+]getting ${messages.length} messages, has media: ${hasMedia}`
    );
    if (hasMedia) {
      const cookies = (await page.cookies())
        .map((cookie) => {
          return `${cookie.name}=${cookie.value}`;
        })
        .join('; ');
      messages.forEach((message) => {
        processMessage(message, {
          'accept': 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
          'cache-control': 'no-cache',
          'pragma': 'no-cache',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'cookie': cookies,
        });
      });
    }
  }, 2000);
})();
