import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Pm102023 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sidoName: string;

  @Column()
  stationName: string;

  @Column()
  pm10Value: number;

  @Column({ type: 'datetime' })
  timestamp: Date;
}
