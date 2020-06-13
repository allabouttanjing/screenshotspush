import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewImagesAndFrameAttrsTable1592089281864
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE IF EXISTS images`);
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS images(
            id integer PRIMARY KEY AUTOINCREMENT, 
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
        CREATE TABLE frame_attrs(
            song_id TEXT NOT NULL, 
            seconds_per_frame integer NOT NULL, 
            frame_number integer NOT NULL, 
            hidden boolean DEFAULT(FALSE), 
            image_id integer NOT NULL, 
            PRIMARY KEY (song_id, seconds_per_frame, frame_number)
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE IF EXISTS frame_attrs`);
    await queryRunner.query(`DROP TABLE IF EXISTS images`);
    await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS images (
            song_id text NOT NULL, 
            frame_order integer NOT NULL, 
            data blob NOT NULL, 
            PRIMARY KEY (song_id, frame_order)
        )
    `);
  }
}
