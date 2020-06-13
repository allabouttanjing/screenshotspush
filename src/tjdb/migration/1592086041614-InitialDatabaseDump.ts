import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialDatabaseDump1592086041614 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS songs (
        id text PRIMARY KEY NOT NULL, 
        data0 blob NOT NULL, 
        data1 blob NOT NULL, 
        data2 blob NOT NULL, 
        data3 blob NOT NULL, 
        data4 blob NOT NULL, 
        data5 blob NOT NULL, 
        data6 blob NOT NULL, 
        data7 blob NOT NULL,
        data8 blob NOT NULL, 
        data9 blob NOT NULL
      )
      `);
    await queryRunner.query(`
    CREATE TABLE IF NOT EXISTS song_metadata (
        id text PRIMARY KEY NOT NULL, 
        title text NOT NULL, 
        priority integer NOT NULL
      )
      `);
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS histories (
        id TEXT NOT NULL,
        played_at TEXT NOT NULL, 
        PRIMARY KEY (id, played_at)
      )
      `);
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS images (
          song_id text NOT NULL, 
          frame_order integer NOT NULL, 
          data blob NOT NULL, 
          PRIMARY KEY (song_id, frame_order)
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE songs`);
    await queryRunner.query(`DROP TABLE song_metadata`);
    await queryRunner.query(`DROP TABLE histories`);
    await queryRunner.query(`DROP TABLE images`);
  }
}
