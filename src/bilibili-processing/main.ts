import { ArgumentParser } from 'argparse';
import * as fs from 'fs';
import * as path from 'path';
import * as child_process from 'child_process';
import * as tmp from 'tmp';

function setupArgParser(): ArgumentParser {
  const parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Processing downloaded files from bilibili',
  });

  parser.addArgument(['-i', '--input_dir'], {
    help:
      'directory for downloaded file(s), use abs path. should always be the top level',
    required: true,
    type: String,
  });

  parser.addArgument(['-o', '--output_dir'], {
    help:
      'directory for outputing/caching the processing results, use abs path. should always be the top level',
    required: true,
    type: String,
  });

  parser.addArgument(['-t', '--target_name'], {
    help: 'name for the only video to be processed, only partial is needed',
    type: String,
  });

  parser.addArgument(['-d', '--dry_run'], {
    help:
      'has to be specified as "false" in order not to dry run (NOT USED FOR NOW)',
    type: (s: string) => {
      try {
        return JSON.parse(s.toLowerCase()) === false ? false : true;
      } catch (e) {
        return true;
      }
    },
    defaultValue: true,
  });
  return parser;
}

const parser = setupArgParser();
const args = parser.parseArgs();
//   console.dir(args);
const inputRootDir: string = args['input_dir'];
const outputRootDir: string = args['output_dir'];
const targetName: string = args['target_name'];

// sort by numerical number
const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: 'base',
});

const ErrorLog = 'error.log';
const OutputLog = 'output.log';
function cleanupLogs(): void {
  if (fs.existsSync(ErrorLog)) fs.truncateSync(ErrorLog);
  if (fs.existsSync(OutputLog)) fs.truncateSync(OutputLog);
}
function log(
  msg: string,
  prefix: string = '[+]',
  toStdout: boolean = false
): void {
  if (toStdout) {
    console.log(`${prefix} ${msg}`);
  }
  const d = new Date();
  if (prefix !== '[+]') {
    fs.appendFileSync(ErrorLog, `${d.getHours()}:${d.getMinutes()} - ${msg}\n`);
  } else {
    fs.appendFileSync(
      OutputLog,
      `${d.getHours()}:${d.getMinutes()} - ${msg}\n`
    );
  }
}

function processLevel1(relativePathFromInputRoot: string): void {
  const level1AbsPath = path.join(inputRootDir, relativePathFromInputRoot);
  const level2Names = fs.readdirSync(level1AbsPath);
  const eligiblelevel2Names = level2Names.filter((level2Name) =>
    isLegitLevel2Name(level1AbsPath, level2Name)
  );
  if (eligiblelevel2Names.length == 0) {
    //   no level 2. e.g. only has 1p
    processFilesInsideDir(relativePathFromInputRoot);
  } else {
    const callback = withProgressMonitor(
      '  level 2',
      eligiblelevel2Names.length,
      (level2Name: string) => {
        processFilesInsideDir(path.join(relativePathFromInputRoot, level2Name));
      }
    );
    eligiblelevel2Names.sort(collator.compare).forEach(callback);
  }
}

function withNonExistingDestFile(
  fileToCheck: string,
  callback: () => void
): void {
  if (fs.existsSync(fileToCheck)) {
    log(`Already exists. skipping... ${path.basename(fileToCheck)}`);
  } else {
    callback();
  }
}

// doing the actual work, inside the directory with real audio/video files
function processFilesInsideDir(relativeDirFromInputRoot: string): void {
  const outputAbsDir = path.join(outputRootDir, relativeDirFromInputRoot);
  const [outputVideoName, outputAudioName, outputFramesNamePrefix] = (() => {
    const pathSegments = relativeDirFromInputRoot.split(path.sep);
    const avid = pathSegments[0].match(/^av[0-9]+/);
    if (pathSegments.length == 1) {
      //only 1 level
      return [
        `${avid}-${pathSegments[0]}.mkv`,
        `${avid}-${pathSegments[0]}.aac`,
        `${avid}-${pathSegments[0]}`,
      ];
    }
    if (pathSegments.length == 2) {
      //with p
      return [
        `${avid}-${pathSegments[1]}.mkv`,
        `${avid}-${pathSegments[1]}.aac`,
        `${avid}-${pathSegments[1]}`,
      ];
    }

    log(`this can't happen! path segments: ${pathSegments}`, '[-]');
    throw new Error();
  })();
  const framesOutputAbsDir = path.join(outputAbsDir, 'frames');
  const outputFramesName = `${outputFramesNamePrefix}-%03d.png`;

  function executeCmds(
    videoCmd: string,
    audioCmd: string,
    framesCmd: string
  ): void {
    try {
      //audio
      withNonExistingDestFile(path.join(outputAbsDir, outputAudioName), () => {
        log(`executing ${audioCmd}`);
        child_process.execSync(audioCmd);
      });

      //video
      withNonExistingDestFile(path.join(outputAbsDir, outputVideoName), () => {
        log(`executing ${videoCmd}`);
        child_process.execSync(videoCmd);
      });

      //frames
      withNonExistingDestFile(
        // only check if the first frame exists
        path.join(framesOutputAbsDir, `${outputFramesNamePrefix}-001.png`),
        () => {
          log(`executing ${framesCmd}`);
          child_process.execSync(framesCmd);
        }
      );
    } catch (e) {
      log(e, '[-]');
    }
  }

  // since `framesOutputAbsDir` contains `outputAbsDir`, just need to mkdir for the longer one
  fs.mkdirSync(framesOutputAbsDir, { recursive: true });
  log(`proceeding with directory ${outputAbsDir}`);

  const inputAbsDir = path.join(inputRootDir, relativeDirFromInputRoot);
  const isM4s = fs.readdirSync(inputAbsDir).some((n) => n.includes('.m4s'));
  if (isM4s) {
    const audioKeys = ['30280', '30232', '30216'];
    const largestAudioFile = fs
      .readdirSync(inputAbsDir)
      .filter((name) => audioKeys.some((key) => name.includes(key)))
      .sort(
        (f1, f2) =>
          fs.statSync(path.join(inputAbsDir, f2)).size -
          fs.statSync(path.join(inputAbsDir, f1)).size
      )[0];

    const largestVideoFile = fs
      .readdirSync(inputAbsDir)
      .filter((name) => audioKeys.every((key) => !name.includes(key)))
      .sort(
        (f1, f2) =>
          fs.statSync(path.join(inputAbsDir, f2)).size -
          fs.statSync(path.join(inputAbsDir, f1)).size
      )[0];

    log(`audio file: ${largestAudioFile}\nvideofile: ${largestVideoFile}`);
    const videoCmd = `ffmpeg \\
    -i "${path.join(inputAbsDir, largestVideoFile)}" \\
    -i "${path.join(inputAbsDir, largestAudioFile)}" \\
    -c copy \\
    "${path.join(outputAbsDir, outputVideoName)}"`;

    const audioCmd = `ffmpeg  \\
    -i "${path.join(inputAbsDir, largestAudioFile)}" \\
    -c copy \\
    "${path.join(outputAbsDir, outputAudioName)}"`;

    const framesCmd = `ffmpeg  \\
    -i "${path.join(inputAbsDir, largestVideoFile)}" \\
    -vf fps=1/5 \\
    "${path.join(framesOutputAbsDir, outputFramesName)}"`;

    executeCmds(videoCmd, audioCmd, framesCmd);
  } else {
    // non .m4s format: flv/mp4..
    const sortedFileList = fs.readdirSync(inputAbsDir).sort(collator.compare);
    if (sortedFileList.length == 0) {
      log(`no data source in ${relativeDirFromInputRoot}`, '[-]');
      return;
    }

    const tmpInputFile = tmp.fileSync();
    const ffmpegEntries = sortedFileList
      .map((name) => path.join(inputAbsDir, name))
      .map((absPath) => `file '${absPath}'\n`);

    const tmpData = ffmpegEntries.join('');
    fs.writeFileSync(tmpInputFile.name, tmpData);

    const ffmpegCmdPrefix = `ffmpeg -f concat -safe 0 \\
    -i "${tmpInputFile.name}" \\`;

    //although .flv/.mp4 is already video, we unify them to be .mkv
    const videoCmd = `${ffmpegCmdPrefix}
    -c copy \\
    "${path.join(outputAbsDir, outputVideoName)}"`;

    const audioCmd = `${ffmpegCmdPrefix}
    -c copy \\
    "${path.join(outputAbsDir, outputAudioName)}"`;

    const framesCmd = `${ffmpegCmdPrefix}
    -vf fps=1/5 \\
    "${path.join(framesOutputAbsDir, outputFramesName)}"`;

    executeCmds(videoCmd, audioCmd, framesCmd);
  }
}

// e.g. av123456-..../
function isLegitLevel1Name(name: string): boolean {
  const absPath = path.join(inputRootDir, name);
  const regex = /^av[0-9]{5}/;
  return fs.statSync(absPath).isDirectory && regex.test(name);
}

// e.g. p123-.../
function isLegitLevel2Name(level1AbsPath: string, name: string): boolean {
  const absPath = path.join(level1AbsPath, name);
  const regex = /^p[0-9]{1,3}-/;
  return fs.statSync(absPath).isDirectory && regex.test(name);
}

function withProgressMonitor<T>(
  description: string,
  totalCount: number,
  callback: (arg: T) => void
): (arg: T) => void {
  let processedCount = 0;
  process.stdout.write(`\n`);
  return (arg: T) => {
    callback(arg);
    processedCount++;
    process.stdout.write(`\r${description}: ${processedCount}/${totalCount}`);
    if (processedCount == totalCount) process.stdout.write('\n');
  };
}

(async () => {
  cleanupLogs();
  try {
    const level1Names = fs.readdirSync(inputRootDir);
    if (targetName) {
      //process matching ones
      const filtered = level1Names.filter((name) => name.includes(targetName));
      if (filtered.length > 0) {
        const callback = withProgressMonitor(
          'level 1',
          filtered.length,
          processLevel1
        );
        filtered.forEach(callback);
      } else {
        log(`${targetName} doesn't exist!`, '[-]');
        return;
      }
    } else {
      //process all
      const eligibleNames = level1Names.filter(isLegitLevel1Name);
      const callback = withProgressMonitor(
        'level 1',
        eligibleNames.length,
        processLevel1
      );
      eligibleNames.forEach(callback);
    }
  } catch (e) {
    log(e && e.stack(), '[-]');
  }
})();
