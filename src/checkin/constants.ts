export const LaunchConfig = {
  args: ['--no-sandbox'],
  headless: false,
  executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  //  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  // "/usr/bin/chromium-browser",
};

export const imageTypeSuffix = '.png';
export const ExecutionTime =
    (new Date().toLocaleString()).replace(/\/|, |,/g, '-');
export const PathWeibo = '/weibo';