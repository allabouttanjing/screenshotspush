import Dropbox from 'dropbox';
import puppeteer from 'puppeteer';
import {login, qiandao} from './actions';
import {LaunchConfig} from './constants';
import {AccessToken, PushBulletApiKey} from './private';
import PushBullet = require('pushbullet');
import fetch from 'isomorphic-fetch';

(async () => {
  const browser = await puppeteer.launch(LaunchConfig);
  const pusher = new PushBullet(PushBulletApiKey);
  const dbx =
      new Dropbox.Dropbox({accessToken : AccessToken, fetch : fetch} as any);

  try {
    await login(browser, pusher, dbx);
  } catch (e) {
    console.error(`[-]login 1`);
    console.error(`${e}`);
    try {
      await login(browser, pusher, dbx);
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
  //   await screenshots(browser, pusher, dbx, urls);
  // } catch (e) {
  //   console.error(`[-]screenshots 1`);
  //   console.error(`${e}`);
  // }

  try {
    await qiandao(browser, pusher, dbx);
  } catch (e) {
    console.error(`[-]qiandao 1`);
    console.error(`${e}`);
    try {
      await qiandao(browser, pusher, dbx);
    } catch (e) {
      await browser.close();
    }
  }
  await browser.close();
})();