import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'song_metadata' })
export class SongMetadata {
  @PrimaryColumn({ type: 'text' }) id!: string;

  @Column({ type: 'text' }) title!: string;
  @Column({ type: 'int' }) priority!: number;
}
