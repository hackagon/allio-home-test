import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { DomainModule } from 'src/domain/domain.module';
import { HealthCheckController } from './controller/healthcheck.controller';
import { StockResolver } from './resolver/stock.resolver';

@Module({
  imports: [TerminusModule, DomainModule],
  providers: [StockResolver],
  controllers: [HealthCheckController],
})
export class PresentationModule {}
