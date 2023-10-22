import { Module } from '@nestjs/common';
import { AlphaVantageModule } from 'src/infrastructure/alphavantage/alphavantage.module';
import {
  IGetTimeSeriesDataUseCase,
  GetTimeSeriesDataUseCase,
} from './usecase/time-series';

@Module({
  imports: [AlphaVantageModule],
  providers: [
    {
      provide: IGetTimeSeriesDataUseCase,
      useClass: GetTimeSeriesDataUseCase,
    },
  ],
  exports: [IGetTimeSeriesDataUseCase],
})
export class DomainModule {}
