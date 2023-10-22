import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'src/config';
import { AlphaVantageModule } from 'src/infrastructure/alphavantage/alphavantage.module';
import { DatabaseModule } from 'src/infrastructure/database';
import { FindUserUseCase, IFindUserUseCase } from './usecase/find-user';
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
      signOptions: { expiresIn: '1d' },
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
    {
      provide: IFindUserUseCase,
      useClass: FindUserUseCase,
    },
  ],
  exports: [
    IGetTimeSeriesDataUseCase,
    IRegisterUseCase,
    ILoginUseCase,
    IFindUserUseCase,
  ],
})
export class DomainModule {}
