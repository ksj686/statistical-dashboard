import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dust } from './dust.entity';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DustService {
  constructor(
    @InjectRepository(Dust)
    private dustRepository: Repository<Dust>,
    private configService: ConfigService,
  ) {}

  async fetchAndSaveDustData(): Promise<void> {
    const apiKey = this.configService.get<string>('SEOUL_API_KEY');
    const url = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${apiKey}&returnType=json&numOfRows=100&pageNo=1&sidoName=서울&ver=1.0`;

    try {
      const response = await axios.get(url);
      const items = response.data.response.body.items;

      if (!items || items.length === 0) {
        console.log('No data received from the API.');
        return;
      }

      const latestDataTime = items[0].dataTime;
      const datePart = latestDataTime.split(' ')[0];

      const count = await this.dustRepository
        .createQueryBuilder('dust')
        .where('DATE(dust.timestamp) = :date', { date: datePart })
        .getCount();

      if (count > 0) {
        console.log(`Data for date ${datePart} already exists. Skipping fetch.`);
        return;
      }

      for (const item of items) {
        if (item.pm10Value && !isNaN(parseInt(item.pm10Value, 10))) {
          const dust = new Dust();
          dust.sidoName = item.sidoName;
          dust.stationName = item.stationName;
          dust.pm10Value = parseInt(item.pm10Value, 10);
          dust.timestamp = new Date(item.dataTime);
          await this.dustRepository.save(dust);
        }
      }
    } catch (error) {
      console.error('Error fetching or saving dust data:', error);
      throw error;
    }
  }

  async getDustData(date?: string): Promise<Dust[]> {
    if (date) {
      return this.dustRepository
        .createQueryBuilder('dust')
        .where('DATE(dust.timestamp) = :date', { date })
        .getMany();
    }
    return this.dustRepository.find();
  }

  async getDistinctDates(): Promise<string[]> {
    const result = await this.dustRepository
      .createQueryBuilder('dust')
      .select('DISTINCT DATE(dust.timestamp)', 'date')
      .orderBy('date', 'DESC')
      .getRawMany();
    return result.map((item) => item.date);
  }
}
