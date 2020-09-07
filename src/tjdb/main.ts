import 'reflect-metadata';

import * as fs from 'fs';
import * as md5File from 'md5-file';
import { Connection, createConnection } from 'typeorm';

import { Song } from './entity/Song';
import { SongMetadata } from './entity/SongMetadata';
import { ArgumentParser } from 'argparse';
import { log, cleanupLogs, collator } from '../common/util';
import * as fg from 'fast-glob';
import path from 'path';

function setupArgParser(): ArgumentParser {
  const parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Put generated bilibili files into sqlite db ',
  });

  parser.addArgument(['-i', '--input_dir'], {
    help:
      'directory for generated file(s), use abs path. should always be the top level',
    required: true,
    type: String,
  });

  parser.addArgument(['-t', '--target_name'], {
    help: 'name for the only video to be processed, only partial is needed',
    type: String,
  });
  return parser;
}

const parser = setupArgParser();
const args = parser.parseArgs();
const inputRootDir: string = args['input_dir'];
const targetName: string = args['target_name'];

async function exists(connection: Connection, song: Song): Promise<boolean> {
  return (
    (await connection
      .createQueryBuilder()
      .select('*')
      .from(Song, 'song')
      .where('song.id=:id', { id: song.id })
      .getCount()) > 0
  );
}

cleanupLogs();
const CHUNK_SIZE = 10;
createConnection()
  .then(async (connection) => {
    log(`Reading from ${inputRootDir}...`, '[+]', true);
    const inputFileAbsPaths = fg
      .sync(`${inputRootDir}/**/*.aac`, {
        ignore: ['**/frames/**'],
      })
      .filter((path) => path.includes(targetName || ''))
      .sort(collator.compare);

    log(inputFileAbsPaths.join('\n'), '[+]', true);

    for (const [index, inputFileAbsPath] of inputFileAbsPaths.entries()) {
      log(`Processing ${index} / ${inputFileAbsPaths.length}..`);
      const inputFileName = path.basename(inputFileAbsPath);
      const songId = md5File.sync(inputFileAbsPath);

      const buf: Buffer = fs.readFileSync(inputFileAbsPath);
      const song = new Song();
      song.id = songId;

      const songExists = await exists(connection, song);
      if (songExists) {
        log(`Alredy existis. skipping: ${inputFileName}`);
        continue;
      }

      const chunkSize = 1024 * 1024 + 524288; // 1.5mb
      let pos = 0;
      let counter = 0;
      while (pos < buf.length) {
        const chunk = buf.slice(pos, pos + chunkSize);
        song.data[counter] = chunk;
        pos += chunkSize;
        counter++;
      }
      if (counter > CHUNK_SIZE) {
        log(
          `Only ${CHUNK_SIZE} chunks are supported!\nchunk length ${counter}\nskip ${inputFileName}\ncontinuing to next...`,
          '[-]',
          true
        );
        continue;
      }

      song.fill();
      await connection.manager.save(song);

      const metadata = new SongMetadata();
      metadata.id = songId;
      metadata.priority = 0;
      metadata.title = inputFileName;
      await connection.manager.save(metadata);

      log(`Saved ${inputFileName}`);
    }
  })
  .catch((error) => console.log(error));
