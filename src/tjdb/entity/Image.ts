import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'images' })
export class Song {
  @PrimaryColumn({ type: 'integer' }) id!: number;

  @Column({ type: 'blob' }) data0!: Buffer;
  @Column({ type: 'blob' }) data1!: Buffer;
  @Column({ type: 'blob' }) data2!: Buffer;
  @Column({ type: 'blob' }) data3!: Buffer;
  @Column({ type: 'blob' }) data4!: Buffer;
  @Column({ type: 'blob' }) data5!: Buffer;
  @Column({ type: 'blob' }) data6!: Buffer;
  @Column({ type: 'blob' }) data7!: Buffer;
  @Column({ type: 'blob' }) data8!: Buffer;
  @Column({ type: 'blob' }) data9!: Buffer;

  public data: Array<Buffer> = new Array(100).fill(Buffer.alloc(0));
  fill() {
    this.data0 = this.data[0];
    this.data1 = this.data[1];
    this.data2 = this.data[2];
    this.data3 = this.data[3];
    this.data4 = this.data[4];
    this.data5 = this.data[5];
    this.data6 = this.data[6];
    this.data7 = this.data[7];
    this.data8 = this.data[8];
    this.data9 = this.data[9];
  }
}
