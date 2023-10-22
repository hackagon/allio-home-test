import { Module } from '@nestjs/common';
import { AlphaVantageModule } from 'src/infrastructure/alphavantage/alphavantage.module';
import { DatabaseModule } from 'src/infrastructure/database';
import { IRegisterUseCase, RegisterUseCase } from './usecase/register';
import {
  IGetTimeSeriesDataUseCase,
  GetTimeSeriesDataUseCase,
} from './usecase/time-series';

@Module({
  imports: [AlphaVantageModule, DatabaseModule],
  providers: [
    {
      provide: IGetTimeSeriesDataUseCase,
      useClass: GetTimeSeriesDataUseCase,
    },
    {
      provide: IRegisterUseCase,
      useClass: RegisterUseCase,
    },
  ],
  exports: [IGetTimeSeriesDataUseCase, IRegisterUseCase],
})
export class DomainModule {}
