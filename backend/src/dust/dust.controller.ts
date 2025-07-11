import { Controller, Get, Post } from '@nestjs/common';
import { DustService } from './dust.service';
import { Dust } from './dust.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

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
  @ApiOperation({ summary: 'Get all dust data' })
  @ApiResponse({ status: 200, description: 'Return all dust data.', type: [Dust] })
  async getDustData(): Promise<Dust[]> {
    return this.dustService.getDustData();
  }
}
