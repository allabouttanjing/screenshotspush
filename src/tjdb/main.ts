import 'reflect-metadata';

import * as fs from 'fs';
import * as md5File from 'md5-file';
import { Connection, createConnection } from 'typeorm';

import { Song } from './entity/Song';
import { SongMetadata } from './entity/SongMetadata';

const SONGS_DIR = process.env['SONGS_DIR'];

if (!SONGS_DIR) {
  console.error('specify path to songs in SONG_DIR');
  process.exit(1);
}

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

const CHUNK_SIZE = 10;
createConnection()
  .then(async (connection) => {
    const names = fs.readdirSync(SONGS_DIR).filter((f) => f.endsWith('.aac'));
    for (let name of names) {
      const fullPath = `${SONGS_DIR}/${name}`;
      const songId = md5File.sync(fullPath);
      // console.log(name, songId);

      const buf: Buffer = fs.readFileSync(fullPath);
      const song = new Song();
      song.id = songId;

      const songExists = await exists(connection, song);
      if (songExists) {
        console.info(`[x]alredy existis. skipping: ${name}`);
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
        console.error(
          `Only ${CHUNK_SIZE} chunks are supported!\nchunk length ${counter}\nskip ${name}\ncontinuing to next...`
        );
        continue;
      }

      song.fill();
      await connection.manager.save(song);

      const metadata = new SongMetadata();
      metadata.id = songId;
      metadata.priority = 0;
      metadata.title = name;
      await connection.manager.save(metadata);

      console.log(`saved ${name}`);
      // process.exit();
    }
  })
  .catch((error) => console.log(error));
