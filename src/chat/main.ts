import {Dropbox} from 'dropbox';
import * as fs from 'fs';
import fetch from 'isomorphic-fetch';
import puppeteer from 'puppeteer';
import request from 'request';
import * as tmp from 'tmp';

import {login} from '../common/actions';
import {LaunchConfig} from '../common/config';
import {AccessToken} from '../common/private';

import {MockJsResponseHeader, PathWeiboChat} from './constants';

interface FromUser {
  'id': number;
  'screen_name': string;
}
interface Message {
  'from_user': FromUser;
  'media_type': 1|4;  // 1: image, 4:audio
  'time': number;
  fids: number[];
}

(async () => {
  const browser = await puppeteer.launch(LaunchConfig);
  const dbx = new Dropbox({accessToken: AccessToken, fetch: fetch});

  await login(browser);

  function imageUrl(fid: number): string {
    return `https://upload.api.weibo.com/2/mss/msget?fid=${
        fid}&source=209678993&imageType=origin&ts=${Date.now() - 1000}`;
  }

  function audioUrl(fid: number): string {
    return `https://api.weibo.com/amrdata/${fid}?source=209678993`;
  }

  async function existsOnDropbox(path: string): Promise<boolean> {
    try {
      const metadata = await dbx.filesGetMetadata({path: path});
      console.log(`[+]already exists: ${metadata.path_display}`);
      return true;
    } catch (e) {
      console.log(`[+]${path} doesn't exist`);
      return false;
    }
  }

  function processMessage(
      message: Message, headers: Record<string, string>): void {
    const fromUser = message.from_user;
    const date = new Date(message.time * 1000);
    const dateStr = date.toISOString().slice(0, 10);
    const fids = message.fids;
    const fileNamePrefix =
        `${fromUser.id}-${fromUser.screen_name}-${message.time}`;
    switch (message.media_type) {
      case 1:  // image
        fids.forEach(fid => {
          const tmpFile = tmp.fileSync();
          let originalName = '';
          request.defaults({jar: true})({url: imageUrl(fid), headers: headers})
              .on('response',
                  response => {
                    const headers = response.headers;
                    const parts =
                        headers['content-disposition'] ?.split('filename=');
                    originalName = !!parts ?
                        parts[parts.length - 1].replace(/\"/g, '') :
                        '';
                  })
              .on('end',
                  async () => {
                    const fullPath = `${PathWeiboChat}/${dateStr}/${
                        fileNamePrefix}-${fid}-${originalName}`;
                    if (!await existsOnDropbox(fullPath)) {
                      try {
                        const response = await dbx.filesUpload({
                          path: fullPath,
                          contents: fs.readFileSync(`${tmpFile.name}`)
                        });
                        const name = response.name;
                        console.log(`[+]uploading image succeed: ${name}`);
                      } catch (e) {
                        console.error(`[-]uploading image failed`);
                        console.error(e);
                      }
                    }
                  })
              .pipe(fs.createWriteStream(tmpFile.name, {fd: tmpFile.fd}));
        });
        break;
      case 4:  // audio
        fids.forEach(fid => {
          const tmpFile = tmp.fileSync();
          request.defaults({jar: true})({url: audioUrl(fid), headers: headers})
              .on('end',
                  async () => {
                    const fullPath = `${PathWeiboChat}/${dateStr}/${
                        fileNamePrefix}-${fid}.mpeg`;
                    if (!await existsOnDropbox(fullPath)) {
                      try {
                        const response = await dbx.filesUpload({
                          path: fullPath,
                          contents: fs.readFileSync(`${tmpFile.name}`)
                        });
                        const name = response.name;
                        console.log(`[+]uploading audio succeed: ${name}`);
                      } catch (e) {
                        console.error(`[-]uploading audio failed`);
                        console.error(e);
                      }
                    }
                  })
              .pipe(fs.createWriteStream(tmpFile.name, {fd: tmpFile.fd}));
        });
    }
  }

  const chatUrl = 'https://api.weibo.com/chat/#/chat';
  const page = await browser.newPage();

  await page.setRequestInterception(true);

  page.on('request', async (r) => {
    if (r.url().includes('chat/js/app.')) {
      const patchedJs = fs.readFileSync(
          'src/chat/patched-weibo-app.js');  // TODO better place to put
      console.log(`intercepted... ${r.url()}`);
      r.respond({
        status: 200,
        headers: MockJsResponseHeader,
        contentType: 'text/javascript',
        body: patchedJs,
      });
      // r.continue();
    } else if (r.url().includes('query_messages.json')) {
      const headers = r.headers();
      const cookies = (await page.cookies())
                          .map((cookie) => {
                            return `${cookie.name}=${cookie.value}`;
                          })
                          .join('; ');

      headers.cookie = cookies;
      const options = {url: r.url(), headers: headers};

      request.defaults({jar: true})(options).on('response', response => {
        let body = '';
        response.on('data', data => {
          body += data;
        });
        response.on('end', () => {
          const json = JSON.parse(body);
          const messages: Message[] = json['messages'];
          const hasMedia =
              messages.some(m => m.media_type == 1 || m.media_type == 4);
          // const hasMedia = messages.some(m => m.media_type == 4);
          console.log(
              `[+]getting ${messages.length} messages, has media: ${hasMedia}`);
          if (hasMedia) {
            messages.forEach(message => {
              processMessage(message, headers);
            });
          }
        });
      });
      r.continue();
    } else {
      r.continue();
    }
  });

  // click 置顶
  await page.goto(chatUrl);
  await page.waitForSelector('.toptag');
  await page.click('.toptag');

  // scroll top once to trigger patched js setup
  const scrollBarSelector =
      '#drag-area > div > div.message > div.message-wrapper.flex-1.relative > div.__vuescroll.hasVBar > div.__rail-is-vertical > div > div';
  await page.waitForSelector(scrollBarSelector);
  console.log('scrollBar is there');
  const scrollBar = await page.$(scrollBarSelector);
  const boundingBox = (await scrollBar?.boundingBox())!;
  await page.mouse.move(
      boundingBox.x + boundingBox.width / 2,
      boundingBox.y + boundingBox.height / 2);
  await page.mouse.down();
  await new Promise(r => setTimeout(r, 2000));
  await page.mouse.move(0, -2366);
  await new Promise(r => setTimeout(r, 2000));
  await page.mouse.move(0, -2366);
  await page.mouse.up();

  // sanity check
  const scrollToTopFn: string = await page.evaluate(() => {
    return (<any>window).hijackedScrollToTop.toString();
  });
  const scrollToTopParam: {} = await page.evaluate(() => {
    return (<any>window).hijackedScrollToTopParam.toString();
  });
  console.log(`scrollToTopFn ${scrollToTopFn}, hijackedScrollToTopParam ${
      scrollToTopParam}`);

  const interval = setInterval(async () => {
    console.log(`calling scrollToTop()..`);
    try {
      await page.evaluate(() => {
        return (<any>window)
            .hijackedScrollToTop.call((<any>window).hijackedScrollToTopParam);
      });
    } catch (e) {
      console.log(e);
      console.log('[-] interval exception, clearing..');
      clearInterval(interval);
      browser.close().then(() => process.exit(1));
    }
  }, 2000);
})();