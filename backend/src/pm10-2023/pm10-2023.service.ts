import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pm102023 } from './pm10-2023.entity';
import * as path from 'path';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import * as iconv from 'iconv-lite';

@Injectable()
export class Pm102023Service {
  constructor(
    @InjectRepository(Pm102023)
    private pm102023Repository: Repository<Pm102023>,
  ) {}

  async importData(): Promise<{ message: string }> {
    const filePath = path.resolve(__dirname, '..', '..', '..', '2023_PM10_csv.csv');
    const entities: Pm102023[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(iconv.decodeStream('EUC-KR')) // Decode with EUC-KR
        .pipe(csv())
        .on('data', (row) => {
          const sidoName = row['sidoName'];
          const stationName = row['stationName'];

          for (let month = 1; month <= 12; month++) {
            const monthStr = month < 10 ? `0${month}` : `${month}`;
            const columnName = `2023.${monthStr}`;
            const pm10Value = parseInt(row[columnName], 10);

            if (!isNaN(pm10Value)) {
              const entity = new Pm102023();
              entity.sidoName = sidoName;
              entity.stationName = stationName;
              entity.pm10Value = pm10Value;
              entity.timestamp = new Date(`2023-${monthStr}-01T00:00:00Z`);
              entities.push(entity);
            }
          }
        })
        .on('end', async () => {
          try {
            await this.pm102023Repository.save(entities);
            resolve({ message: '2023 PM10 data imported successfully from CSV.' });
          } catch (error) {
            console.error('Error saving data:', error);
            reject({ message: 'Failed to import data from CSV.' });
          }
        })
        .on('error', (error) => {
          console.error('Error reading CSV:', error);
          reject({ message: 'Failed to read CSV file.' });
        });
    });
  }

  async getAllData(): Promise<Pm102023[]> {
    return this.pm102023Repository.find();
  }

  async getMonthlyAveragePm10(): Promise<{ month: string; averagePm10: number }[]> {
    return this.pm102023Repository
      .createQueryBuilder('pm102023')
      .select("strftime('%Y-%m', pm102023.timestamp)", 'month')
      .addSelect('AVG(pm102023.pm10Value)', 'averagePm10')
      .groupBy('month')
      .orderBy('month', 'ASC')
      .getRawMany();
  }
}
