import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pm102023 } from './pm10-2023.entity';
import { Pm102023Service } from './pm10-2023.service';
import { Pm102023Controller } from './pm10-2023.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pm102023])],
  providers: [Pm102023Service],
  controllers: [Pm102023Controller],
})
export class Pm102023Module {}
