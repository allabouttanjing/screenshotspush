import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'frame_attrs' })
export class FrameAttr {
  @PrimaryColumn({ type: 'text', name: 'song_id' }) songId!: string;
  @PrimaryColumn({ type: 'integer', name: 'song_seconds_per_frameid' })
  secondsPerFrame!: number;
  @PrimaryColumn({ type: 'integer', name: 'frame_number' })
  frameNumber!: number;
  @Column({ type: 'boolean' }) hidden!: boolean;
  @Column({ type: 'integer', name: 'image_id' }) imageId!: number;
}
