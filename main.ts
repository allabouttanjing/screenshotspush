import puppeteer from 'puppeteer';

import {login, qiandao, screenshots} from './actions';
import {LaunchConfig} from './constants';
import {PushBulletApiKey} from './private';

import PushBullet = require('pushbullet');

(async () => {
  const browser = await puppeteer.launch(LaunchConfig);
  const pusher = new PushBullet(PushBulletApiKey);
  try {
    await login(browser, pusher);
  } catch (e) {
    console.error(`[-]login 1`);
    console.error(`${e}`);
    try {
      await login(browser, pusher);
    } catch (e) {
      console.error(`[-]login 2`);
      console.error(`${e}`);


      await browser.close();
    }
  }

  // const urls = [
  //   'https://www.weibo.com/tanjing?from=myfollow_all&is_all=1',
  //   'https://www.weibo.com/tanjing911?from=myfollow_all',
  //   'https://www.weibo.com/tanjinggemi?from=myfollow_all'
  // ];
  // try {
  //   await screenshots(browser, pusher, urls);
  // } catch (e) {
  //   console.error(`[-]screenshots 1`);
  // console.error(`${e}`);
  // }

  try {
    await qiandao(browser, pusher);
  } catch (e) {
    console.error(`[-]qiandao 1`);
    console.error(`${e}`);
    try {
      await qiandao(browser, pusher);
    } catch (e) {
      await browser.close();
    }
  }
  await browser.close();
})();