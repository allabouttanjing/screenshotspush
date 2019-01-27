import puppeteer from 'puppeteer';

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

(async () => {
  const url = 'https://www.weibo.com/login.php';
  const browser = await puppeteer.launch(LaunchConfig);
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
    page.waitForNavigation({waitUntil: 'networkidle0'})
  ]);

  const url2 =
      'https://www.weibo.com/p/100808f26b39724d0515ef4cbd3f366d59ce14/super_index';
  const page2 = await browser.newPage();
  await page2.setViewport({width: 1566, height: 2366});
  await page2.setExtraHTTPHeaders(Headers);
  await page2.goto(url2);
  await page2.waitForSelector('.topic_PCD_guide_special', {visible: true});

  // click qian dao button
  await page2.click(
      '#Pl_Core_StuffHeader__1 > div > div.header_wrap.S_bg2.S_line2 > div > div.pf_opt > div > div:nth-child(3) > a');
  await page2.waitForSelector('.W_layer_btn.S_bg1', {visible: true});
  await page2.screenshot({path: 'qiandao.jpg', quality: 25});

  const pusher = new PushBullet(PushBulletApiKey);
  pusher.file(DeviceId, './qiandao.jpg', 'qiandao');
  await browser.close();
})();