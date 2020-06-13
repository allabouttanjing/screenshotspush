import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'histories' })
export class Song {
  @PrimaryColumn() id!: string;
  @PrimaryColumn({ name: 'played_at' }) playedAt!: number;
}
