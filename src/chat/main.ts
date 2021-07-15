import { Dropbox } from 'dropbox';
import * as fs from 'fs';
import fetch from 'isomorphic-fetch';
import puppeteer from 'puppeteer';
import request from 'request';
import * as tmp from 'tmp';

import { LaunchConfig } from '../common/config';
import { Logger } from '../common/logger';
import { AccessToken } from '../common/private';

import { MaxDuplicateThreshold, PathWeiboChat } from './constants';

interface FromUser {
  'id': number;
  'screen_name': string;
}
interface Message {
  'id': number;
  'from_user': FromUser;
  'media_type': 1 | 4 | 10; // 1: image, 4:audio, 10: video
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
  const logger = new Logger({ writeToStdout: true });

  let existingFileHitCount = 0;

  function imageUrl(fid: number): string {
    return `https://upload.api.weibo.com/2/mss/msget?fid=${fid}&source=209678993&imageType=origin&ts=${
      Date.now() - 1000
    }`;
  }

  function audioUrl(fid: number): string {
    return `https://api.weibo.com/amrdata/${fid}?source=209678993`;
  }

  function videoUrl(fid: number): string {
    return `http://upload.api.weibo.com/2/mss/msget?source=209678993&fid=${fid}`;
  }

  async function existsOnDropbox(path: string): Promise<boolean> {
    try {
      const metadata = await dbx.filesGetMetadata({ path: path });
      existingFileHitCount += 1;
      logger.info(
        `Already exists: ${metadata.result.path_display}, hit count: ${existingFileHitCount}`
      );
      return true;
    } catch (e) {
      logger.info(`${path} doesn't exist`);
      return false;
    }
  }

  async function uploadToDropboxIfNotExist(
    dbxTargetPath: string,
    tmpFile: tmp.FileResult
  ): Promise<void> {
    if (!(await existsOnDropbox(dbxTargetPath))) {
      try {
        const response = await dbx.filesUpload({
          path: dbxTargetPath,
          contents: fs.readFileSync(`${tmpFile.name}`),
        });
        const name = response.result.name;
        logger.info(`Uploading succeed: ${name}`);
        logger.info(`Removing tmp file: ${tmpFile.name}`);
        fs.unlinkSync(tmpFile.name);
      } catch (e) {
        logger.error(`Uploading failed`);
        logger.error(e && e.stack);
      }
    }
  }

  async function processSingleMediaFile(
    fid: number,
    message: Message,
    headers: Record<string, string>
  ): Promise<void> {
    return new Promise((resolve) => {
      const fromUser = message.from_user;
      const date = new Date(message.time * 1000);
      const dateStr = date.toISOString().slice(0, 10);
      const fileNamePrefix = `${fromUser.id}-${fromUser.screen_name}-${message.time}`;
      const tmpFile = tmp.fileSync();
      switch (message.media_type) {
        case 1: // image
          let originalName = '';
          request
            .defaults({ jar: true })({
              url: imageUrl(fid),
              headers,
            })
            .on('response', (response) => {
              const headers = response.headers;
              const parts = headers['content-disposition']?.split('filename=');
              originalName = !!parts
                ? parts[parts.length - 1].replace(/\"/g, '')
                : '';
            })
            .on('end', async () => {
              const dbxTargetPath = `${PathWeiboChat}/${dateStr}/${fileNamePrefix}-${fid}-${originalName}`;
              await uploadToDropboxIfNotExist(dbxTargetPath, tmpFile);
              resolve();
            })
            .pipe(
              fs.createWriteStream(tmpFile.name, {
                fd: tmpFile.fd,
              })
            );
          break;
        case 4: // audio
          request
            .defaults({ jar: true })({
              url: audioUrl(fid),
              headers: headers,
            })
            .on('end', async () => {
              const dbxTargetPath = `${PathWeiboChat}/${dateStr}/${fileNamePrefix}-${fid}.mpeg`;
              await uploadToDropboxIfNotExist(dbxTargetPath, tmpFile);
              resolve();
            })
            .pipe(
              fs.createWriteStream(tmpFile.name, {
                fd: tmpFile.fd,
              })
            );
          break;
        case 10: // video
          request
            .defaults({ jar: true })({
              url: videoUrl(fid),
              headers: headers,
            })
            .on('end', async () => {
              const dbxTargetPath = `${PathWeiboChat}/${dateStr}/${fileNamePrefix}-${fid}.mp4`;
              await uploadToDropboxIfNotExist(dbxTargetPath, tmpFile);
              resolve();
            })
            .pipe(
              fs.createWriteStream(tmpFile.name, {
                fd: tmpFile.fd,
              })
            );
          break;
        default:
          resolve();
      }
    });
  }

  async function processMessage(
    message: Message,
    headers: Record<string, string>
  ): Promise<void> {
    const fids = message.fids;
    for (const fid of fids) {
      await processSingleMediaFile(fid, message, headers);
      await new Promise((res) =>
        setTimeout(() => {
          res(null);
        }, 1500)
      );
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
  page.setDefaultTimeout(120000);
  page.setDefaultNavigationTimeout(120000);
  await page.goto(chatUrl);
  await page.waitForSelector('.toptag');
  await page.click('.toptag');

  let lastQueryMsgMinId = 0;
  const count = 50;

  let messages = await queryMessages(lastQueryMsgMinId, count);
  while (existingFileHitCount <= MaxDuplicateThreshold && messages.length > 0) {
    lastQueryMsgMinId = messages.sort((m1, m2) => m1.id - m2.id)[0].id;
    logger.info(
      `Last msg id: ${lastQueryMsgMinId}, msg count: ${messages.length}`
    );

    const mediaMessages = messages.filter(
      (m) => m.media_type == 1 || m.media_type == 4 || m.media_type == 10
    );
    logger.info(
      `${mediaMessages.length}/${messages.length} of the messages have media`,
      { withNewline: true }
    );
    if (mediaMessages.length > 0) {
      const cookies = (await page.cookies())
        .map((cookie) => {
          return `${cookie.name}=${cookie.value}`;
        })
        .join('; ');

      for (const mediaMessage of mediaMessages) {
        logger.info(`processing ${JSON.stringify(mediaMessage)}`);
        await processMessage(mediaMessage, {
          'accept': 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
          'cache-control': 'no-cache',
          'pragma': 'no-cache',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'cookie': cookies,
        });
      }
    }
    messages = await queryMessages(lastQueryMsgMinId, count);
  }

  logger.info(
    `No more messages or existing file hits ${existingFileHitCount} times. closing...`
  );
  await page.close();
  await browser.close();
  process.exit(0);
})();
