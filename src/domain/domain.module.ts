import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'src/config';
import { AlphaVantageModule } from 'src/infrastructure/alphavantage/alphavantage.module';
import { DatabaseModule } from 'src/infrastructure/database';
import { ILoginUseCase, LoginUseCase } from './usecase/login';
import { IRegisterUseCase, RegisterUseCase } from './usecase/register';
import {
  IGetTimeSeriesDataUseCase,
  GetTimeSeriesDataUseCase,
} from './usecase/time-series';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: config.SECRET_KEY,
      signOptions: { expiresIn: '60s' },
    }),
    AlphaVantageModule,
    DatabaseModule,
  ],
  providers: [
    {
      provide: IGetTimeSeriesDataUseCase,
      useClass: GetTimeSeriesDataUseCase,
    },
    {
      provide: IRegisterUseCase,
      useClass: RegisterUseCase,
    },
    {
      provide: ILoginUseCase,
      useClass: LoginUseCase,
    },
  ],
  exports: [IGetTimeSeriesDataUseCase, IRegisterUseCase, ILoginUseCase],
})
export class DomainModule {}
