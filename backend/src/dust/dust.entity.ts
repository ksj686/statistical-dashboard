import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Dust {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sidoName: string;

  @Column()
  stationName: string;

  @Column()
  pm10Value: number;

  @CreateDateColumn()
  timestamp: Date;
}
