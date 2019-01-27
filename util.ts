import fs from 'fs';
import {Cookie, Page} from 'puppeteer';

export function sanitizePath(path: string): string {
  const parts = path.split('/');
  const tail = parts[parts.length - 1];
  return tail.split('?')[0];
}

export async function loggedIn(page: Page): Promise<boolean> {
  try {
    await page.waitForSelector('.ficon_user');
    console.log(`[+]user already logged in`);
    return true;
  } catch (e) {
    console.log(`[+]user not logged in yet`);
    return false;
  }
}

export async function saveCookies(page: Page) {
  const cookies = await page.cookies();
  console.log(`[+]saving cookies...`);
  console.log(`${cookies}`);
  fs.writeFileSync('cookies', JSON.stringify(cookies));
}

export async function loadCookies(page: Page) {
  try {
    const cookies =
        JSON.parse(fs.readFileSync('cookies').toString()) as Cookie[];
    console.log(`[+]loading cookies...`);
    console.log(`${cookies}`);
    await page.setCookie(...cookies);
  } catch (e) {
    console.log(`[-]failed loading cookies`);
    console.log(`${e}`);
  }
}