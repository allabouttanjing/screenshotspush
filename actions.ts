import Dropbox from 'dropbox';
import {Browser, Page} from 'puppeteer';
import {DeviceId, Password, Username} from './private';
import {
  getSharedLink,
  loadCookies,
  loggedIn,
  sanitizeAndGeneratePath,
  saveCookies,
  uploadDropbox
} from './util';

import PushBullet = require('pushbullet');

export async function login(browser: Browser, pusher: PushBullet,
                            dbx: Dropbox.Dropbox) {
  const url = 'https://www.weibo.com/login.php';
  const page = await browser.newPage();

  await page.setViewport({width : 1566, height : 2366});
  await loadCookies(page);
  await page.goto(url);

  const signedIn = await loggedIn(page);
  if (!signedIn) {
    await page.evaluate(
        () => { (document.querySelector('#loginname') as any).value = ''; });
    await page.type('#loginname', Username);
    await page.type(
        '#pl_login_form > div > div:nth-child(3) > div.info_list.password > div > input',
        Password);

    await Promise.all([
      page.click(
          '#pl_login_form > div > div:nth-child(3) > div.info_list.login_btn > a'),
      page.waitForNavigation({waitUntil : 'networkidle2'})
    ]);
  }
  await saveCookies(page);

  await saveAndSend(page, pusher, dbx, url);
}

export async function qiandao(browser: Browser, pusher: PushBullet,
                              dbx: Dropbox.Dropbox) {
  const url =
      'https://www.weibo.com/p/100808f26b39724d0515ef4cbd3f366d59ce14/super_index';
  const page = await browser.newPage();
  await page.setViewport({width : 1566, height : 2366});
  await page.goto(url);
  await page.waitForSelector('.topic_PCD_guide_special', {visible : true});

  // click qian dao button
  await page.click(
      '#Pl_Core_StuffHeader__1 > div > div.header_wrap.S_bg2.S_line2 > div > div.pf_opt > div > div:nth-child(3) > a');
  await page.waitForSelector('.W_layer_btn.S_bg1', {visible : true});

  await saveAndSend(page, pusher, dbx, url);
}

export async function screenshots(browser: Browser, pusher: PushBullet,
                                  dbx: Dropbox.Dropbox, urls: string[]) {
  for (let url of urls) {
    const page = await browser.newPage();
    await page.setViewport({width : 1566, height : 2366});
    await page.goto(url, {waitUntil : 'networkidle2'});

    await saveAndSend(page, pusher, dbx, url);
  }
}

async function saveAndSend(page: Page, pusher: PushBullet, dbx: Dropbox.Dropbox,
                           url: string) {
  const path = sanitizeAndGeneratePath(url);
  await page.screenshot({path : path});
  await uploadDropbox(dbx, path);
  const link = await getSharedLink(dbx, path);
  pusher.note(DeviceId, path, link);
  // pusher.file(DeviceId, path, path);
}