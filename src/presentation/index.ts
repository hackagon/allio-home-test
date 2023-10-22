import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { DomainModule } from 'src/domain/domain.module';
import { HealthCheckController } from './controller/healthcheck.controller';
import { UserController } from './controller/user.controller';
import { LoginResolver } from './resolver/login.resolver';
import { StockResolver } from './resolver/stock.resolver';

@Module({
  imports: [TerminusModule, DomainModule],
  providers: [StockResolver, LoginResolver],
  controllers: [HealthCheckController, UserController],
})
export class PresentationModule {}
