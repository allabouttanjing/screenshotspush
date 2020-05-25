import puppeteer from 'puppeteer';

import { login, Notes, qiandao } from '../common/actions';
import { LaunchConfig } from '../common/config';
import { AccessToken, DeviceId, PushBulletApiKey } from '../common/private';

import PushBullet = require('pushbullet');
import fetch from 'isomorphic-fetch';
import { Dropbox } from 'dropbox';

(async () => {
  const browser = await puppeteer.launch(LaunchConfig);
  const pusher = new PushBullet(PushBulletApiKey);
  const dbx = new Dropbox({ accessToken: AccessToken, fetch: fetch });

  try {
    await login(browser);
  } catch (e) {
    console.error(`[-]login 1`);
    console.error(e);
    try {
      await login(browser);
    } catch (e) {
      console.error(`[-]login 2`);
      console.error(e);
      pusher.note(DeviceId, 'tj', Notes.join('\n'));
      await browser.close();
    }
  }

  // const urls = [
  //   'https://www.weibo.com/tanjing?from=myfollow_all&is_all=1',
  //   'https://www.weibo.com/tanjing911?from=myfollow_all',
  //   'https://www.weibo.com/tanjinggemi?from=myfollow_all'
  // ];
  // try {
  //   await screenshots(browser, pusher, dbx, urls);
  // } catch (e) {
  //   console.error(`[-]screenshots 1`);
  //   console.error(`${e}`);
  // }

  const qianDaoUrls = [
    'https://www.weibo.com/p/100808a66b04b5e4dc7df0c87877a986de448c/super_index', // cym
    'https://www.weibo.com/p/100808a7c64ab3578b73b026c791697a5d94dc/super_index', //晶锐学习会
    'https://www.weibo.com/p/100808f26b39724d0515ef4cbd3f366d59ce14/super_index', // tj
  ];

  for (let url of qianDaoUrls) {
    try {
      await qiandao(url, browser, dbx);
    } catch (e) {
      console.error(`[-]qiandao 1`);
      console.error(`${e}`);
      try {
        await qiandao(url, browser, dbx);
      } catch (e) {
        console.error(`[-]qiandao 2`);
        console.error(e);
        pusher.note(DeviceId, 'tj', Notes.join('\n'));
        await browser.close();
      }
    }
  }
  pusher.note(DeviceId, 'tj', Notes.map((note) => unescape(note)).join('\n\n'));
  await browser.close();
})();
