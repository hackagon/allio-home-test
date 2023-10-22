import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AlphaVantageRepository } from './alphavantage.repository';

@Module({
  imports: [HttpModule],
  providers: [AlphaVantageRepository],
  exports: [AlphaVantageRepository],
})
export class AlphaVantageModule {}
