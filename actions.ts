import {Browser} from 'puppeteer';

import {DeviceId, Password, Username} from './private';
import {loadCookies, loggedIn, sanitizePath, saveCookies} from './util';

import PushBullet = require('pushbullet');

export async function login(browser: Browser, pusher: PushBullet) {
  const url = 'https://www.weibo.com/login.php';
  const page = await browser.newPage();

  await page.setViewport({width: 1566, height: 2366});
  await loadCookies(page);
  await page.goto(url);

  const signedIn = await loggedIn(page);
  if (!signedIn) {
    await page.type('#loginname', Username);
    await page.type(
        '#pl_login_form > div > div:nth-child(3) > div.info_list.password > div > input',
        Password);

    await Promise.all([
      page.click(
          '#pl_login_form > div > div:nth-child(3) > div.info_list.login_btn > a'),
      page.waitForNavigation({waitUntil: 'networkidle2'})
    ]);
  }
  await saveCookies(page);
  await page.screenshot({path: `${sanitizePath(url)}.jpg`, quality: 25});
  pusher.file(DeviceId, `${sanitizePath(url)}.jpg`, sanitizePath(url));
}

export async function qiandao(browser: Browser, pusher: PushBullet) {
  const url =
      'https://www.weibo.com/p/100808f26b39724d0515ef4cbd3f366d59ce14/super_index';
  const page = await browser.newPage();
  await page.setViewport({width: 1566, height: 2366});
  await page.goto(url);
  await page.waitForSelector('.topic_PCD_guide_special', {visible: true});

  // click qian dao button
  await page.click(
      '#Pl_Core_StuffHeader__1 > div > div.header_wrap.S_bg2.S_line2 > div > div.pf_opt > div > div:nth-child(3) > a');
  await page.waitForSelector('.W_layer_btn.S_bg1', {visible: true});
  await page.screenshot({path: `${sanitizePath(url)}.jpg`, quality: 25});
  pusher.file(DeviceId, `${sanitizePath(url)}.jpg`, 'qiandao');
}

export async function screenshots(
    browser: Browser, pusher: PushBullet, urls: string[]) {
  for (let url of urls) {
    const page = await browser.newPage();
    await page.setViewport({width: 1566, height: 2366});
    await page.goto(url, {waitUntil: 'networkidle2'});
    await page.screenshot({path: `${sanitizePath(url)}.jpg`, quality: 25});
    pusher.file(DeviceId, `${sanitizePath(url)}.jpg`, sanitizePath(url));
  }
}