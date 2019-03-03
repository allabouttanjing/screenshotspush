import Dropbox from 'dropbox';
import {Browser, Page} from 'puppeteer';
import {Password, Username} from './private';
import {
  getSharedLink,
  loadCookies,
  loggedIn,
  sanitizeAndGeneratePath,
  saveCookies,
  uploadDropbox
} from './util';

export async function login(browser: Browser, dbx: Dropbox.Dropbox) {
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

  await saveAndSend(page, dbx, url);

  console.log('[+] login succeeded');
}

export async function qiandao(url: string, browser: Browser,
                              dbx: Dropbox.Dropbox) {
  const page = await browser.newPage();
  await page.setViewport({width : 1566, height : 2366});
  await page.goto(url);
  try {
    await page.waitForSelector('.topic_PCD_guide_special', {visible : true});
  } catch {
    ;
  }

  // click qian dao button
  await page.click(
      '#Pl_Core_StuffHeader__1 > div > div.header_wrap.S_bg2.S_line2 > div > div.pf_opt > div > div:nth-child(3) > a');
  await page.waitForSelector('.W_layer_title', {visible : true});

  await saveAndSend(page, dbx, url);

  console.log('[+] qiandao succeeded');
}

export async function screenshots(browser: Browser, dbx: Dropbox.Dropbox,
                                  urls: string[]) {
  for (let url of urls) {
    const page = await browser.newPage();
    await page.setViewport({width : 1566, height : 2366});
    await page.goto(url, {waitUntil : 'networkidle2'});

    await saveAndSend(page, dbx, url);
  }
}
export const Notes: string[] = [];
async function saveAndSend(page: Page, dbx: Dropbox.Dropbox, url: string) {
  const path = sanitizeAndGeneratePath(url);
  try {
    await page.screenshot({path : path});
    await uploadDropbox(dbx, path);
    const link = await getSharedLink(dbx, path);
    Notes.push(`${path}\n${link}`);
    console.log('[+] save and send succeeded');
  } catch (e) {
    console.error('[-] save and send failed');
    console.error(e);
    Notes.push(`${path}\n${e}`);
  }
}