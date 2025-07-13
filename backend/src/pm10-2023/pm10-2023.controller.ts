import { Controller, Post, Get } from '@nestjs/common';
import { Pm102023Service } from './pm10-2023.service';
import { Pm102023 } from './pm10-2023.entity';

@Controller('pm10-2023')
export class Pm102023Controller {
  constructor(private readonly pm102023Service: Pm102023Service) {}

  @Post('import')
  async importData() {
    return this.pm102023Service.importData();
  }

  @Get()
  async getAllData(): Promise<Pm102023[]> {
    return this.pm102023Service.getAllData();
  }

  @Get('monthly-average')
  async getMonthlyAveragePm10() {
    return this.pm102023Service.getMonthlyAveragePm10();
  }
}
