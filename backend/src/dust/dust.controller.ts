import { Controller, Get, Post, Query } from '@nestjs/common';
import { DustService } from './dust.service';
import { Dust } from './dust.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

@ApiTags('dust')
@Controller('dust')
export class DustController {
  constructor(private readonly dustService: DustService) {}

  @Post('fetch')
  @ApiOperation({ summary: 'Fetch and save dust data' })
  @ApiResponse({ status: 201, description: 'Data fetched and saved successfully.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async fetchAndSaveDustData(): Promise<void> {
    return this.dustService.fetchAndSaveDustData();
  }

  @Get()
  @ApiOperation({ summary: 'Get dust data, optionally filtered by date' })
  @ApiQuery({ name: 'date', required: false, description: 'Date to filter data by (YYYY-MM-DD)' })
  @ApiResponse({ status: 200, description: 'Return dust data.', type: [Dust] })
  async getDustData(@Query('date') date?: string): Promise<Dust[]> {
    return this.dustService.getDustData(date);
  }

  @Get('dates')
  @ApiOperation({ summary: 'Get distinct dates from dust data' })
  @ApiResponse({ status: 200, description: 'Return distinct dates.', type: [String] })
  async getDistinctDates(): Promise<string[]> {
    return this.dustService.getDistinctDates();
  }
}
