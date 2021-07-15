import * as fs from 'fs';

interface Options {
  writeToStdout: boolean;
}
class Logger {
  private errorLogPath = 'error.log';
  private outputLogPath = 'output.log';
  private options: Options | undefined;

  private cleanUp(): void {
    if (fs.existsSync(this.errorLogPath)) fs.truncateSync(this.errorLogPath);
    if (fs.existsSync(this.outputLogPath)) fs.truncateSync(this.outputLogPath);
  }

  constructor(options?: Options) {
    this.options = options;
    this.cleanUp();
  }

  public info(msg: string, options?: { withNewline?: boolean }) {
    if (this.options?.writeToStdout) {
      options?.withNewline && console.log('\n');
      console.log(`[+] ${msg}`);
    }
    const d = new Date();
    const timestamp = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    fs.appendFileSync(
      this.outputLogPath,
      `${options?.withNewline ? '\n' : ''}${timestamp} - ${msg}\n`
    );
  }

  public error(msg: string) {
    if (this.options?.writeToStdout) {
      console.error(`[-] ${msg}`);
    }
    const d = new Date();
    const timestamp = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    fs.appendFileSync(this.errorLogPath, `${timestamp} - ${msg}\n`);
  }
}

export { Logger };
