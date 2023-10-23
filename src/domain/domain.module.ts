import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'src/config';
import { AlphaVantageModule } from 'src/infrastructure/alphavantage/alphavantage.module';
import { DatabaseModule } from 'src/infrastructure/database';
import {
  FindPreferencesUseCase,
  IFindPreferencesUseCase,
} from './usecase/find-preferences';
import { FindUserUseCase, IFindUserUseCase } from './usecase/find-user';
import { ILoginUseCase, LoginUseCase } from './usecase/login';
import { IRegisterUseCase, RegisterUseCase } from './usecase/register';
import {
  IGetTimeSeriesDataUseCase,
  GetTimeSeriesDataUseCase,
} from './usecase/time-series';

/**
 * Module encapsulating domain-related functionality and dependencies.
 * This module provides services for user registration, login, data retrieval, and preferences management.
 */
@Module({
  imports: [
    // Configure global JWT authentication with specified secret key and token expiration time
    JwtModule.register({
      global: true,
      secret: config.SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    }),

    // Import external modules for Alpha Vantage API integration and database connectivity
    AlphaVantageModule,
    DatabaseModule,
  ],

  // Provide implementations for various domain use cases
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
    {
      provide: IFindPreferencesUseCase,
      useClass: FindPreferencesUseCase,
    },
  ],

  // Export domain-related use cases for use in other modules
  exports: [
    IGetTimeSeriesDataUseCase,
    IRegisterUseCase,
    ILoginUseCase,
    IFindUserUseCase,
    IFindPreferencesUseCase,
  ],
})
export class DomainModule {}
