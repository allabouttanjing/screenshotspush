import puppeteer, {Browser} from 'puppeteer';

import {DeviceId, Password, PushBulletApiKey, Username} from './private';

import PushBullet = require('pushbullet');

const LaunchConfig = {
  args: ['--no-sandbox'],
  headless: true,
  // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google
  // Chrome' "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
  // "/usr/bin/chromium-browser"
};

const Headers = {
  'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36',
  'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7'
};

function sanitizePath(path: string): string {
  const parts = path.split('/');
  return parts[parts.length - 1];
}

async function login(browser: Browser, pusher: PushBullet) {
  const url = 'https://www.weibo.com/login.php';
  const page = await browser.newPage();

  await page.setViewport({width: 1566, height: 2366});
  await page.setExtraHTTPHeaders(Headers);
  await page.goto(url);

  await page.type('#loginname', Username);
  await page.type(
      '#pl_login_form > div > div:nth-child(3) > div.info_list.password > div > input',
      Password);

  await Promise.all([
    page.click(
        '#pl_login_form > div > div:nth-child(3) > div.info_list.login_btn > a'),
    page.waitForNavigation({waitUntil: 'networkidle2'})
  ]);
  await page.screenshot({path: `${sanitizePath(url)}.jpg`, quality: 25});
  pusher.file(DeviceId, `${sanitizePath(url)}.jpg`, sanitizePath(url));
}

async function qiandao(browser: Browser, pusher: PushBullet) {
  const url =
      'https://www.weibo.com/p/100808f26b39724d0515ef4cbd3f366d59ce14/super_index';
  const page = await browser.newPage();
  await page.setViewport({width: 1566, height: 2366});
  await page.setExtraHTTPHeaders(Headers);
  await page.goto(url);
  await page.waitForSelector('.topic_PCD_guide_special', {visible: true});

  // click qian dao button
  await page.click(
      '#Pl_Core_StuffHeader__1 > div > div.header_wrap.S_bg2.S_line2 > div > div.pf_opt > div > div:nth-child(3) > a');
  await page.waitForSelector('.W_layer_btn.S_bg1', {visible: true});
  await page.screenshot({path: `${sanitizePath(url)}.jpg`, quality: 25});
  pusher.file(DeviceId, `${sanitizePath(url)}.jpg`, 'qiandao');
}

async function screenshots(
    browser: Browser, pusher: PushBullet, urls: string[]) {
  for (let url of urls) {
    const page = await browser.newPage();
    await page.setViewport({width: 1566, height: 2366});
    await page.setExtraHTTPHeaders(Headers);
    await page.goto(url, {waitUntil: 'networkidle2'});
    await page.screenshot({path: `${sanitizePath(url)}.jpg`, quality: 25});
    pusher.file(DeviceId, `${sanitizePath(url)}.jpg`, sanitizePath(url));
  }
}

(async () => {
  const browser = await puppeteer.launch(LaunchConfig);
  const pusher = new PushBullet(PushBulletApiKey);
  try {
    await login(browser, pusher);
  } catch (e) {
    console.error(`login 1`);
    try {
      await login(browser, pusher);
    } catch (e) {
      console.error(`login 2`);
      await browser.close();
    }
  }
  const urls = [
    'https://www.weibo.com/tanjing?from=myfollow_all&is_all=1',
    'https://www.weibo.com/tanjing911?from=myfollow_all',
    'https://www.weibo.com/tanjinggemi?from=myfollow_all'
  ];
  try {
    await screenshots(browser, pusher, urls);
  } catch (e) {
    console.error(`screenshots 1`);
  }

  try {
    await qiandao(browser, pusher);
  } catch (e) {
    console.error(`qiandao 1`);
    try {
      await qiandao(browser, pusher);
    } catch (e) {
      await browser.close();
    }
  }
  await browser.close();
})();