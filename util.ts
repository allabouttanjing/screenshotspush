import fs from 'fs';
import {Cookie, Page} from 'puppeteer';

import {ExecutionTime, imageTypeSuffix, PathWeibo} from './constants';

export function sanitizeAndGeneratePath(path: string): string {
  const parts = path.split('/');
  const tail = parts[parts.length - 1];
  return `${tail.split('?')[0]}-${ExecutionTime}${imageTypeSuffix}`;
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

export async function uploadDropbox(dbx: any, path: string): Promise<void> {
  try {
    const response = await dbx.filesUpload(
        {path : `${PathWeibo}/${path}`, contents : fs.readFileSync(`${path}`)});
    const name = response.name;
    console.log(`[+]uploading succeed: ${name}`);
  } catch (e) {
    console.error(`[-]uploading failed: ${name}`);
  }
}

export async function getSharedLink(dbx: any, path: string): Promise<string> {
  try {
    const sharingMetadata = await dbx.sharingCreateSharedLinkWithSettings(
        {path : `${PathWeibo}/${path}`});
    const link = sharingMetadata.url;
    console.log(`[+]link generated: ${link}`);
    return link as string;
  } catch (e) {
    console.error(`[-]link generation error`);
    console.error(e);
    const sharingMetadata =
        await dbx.sharingGetSharedLinks({path : `${PathWeibo}/${path}`});
    const link = sharingMetadata.links[0].url;
    if (!!link) {
      console.log(`[+]link retrieved: ${link}`);
    } else {
      console.error(`[-]link retrieving failed`);
      console.error(e);
    }
    return link as string;
  }
}