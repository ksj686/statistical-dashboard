import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DustController } from './dust.controller';
import { DustService } from './dust.service';
import { Dust } from './dust.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dust])],
  controllers: [DustController],
  providers: [DustService],
})
export class DustModule {}
