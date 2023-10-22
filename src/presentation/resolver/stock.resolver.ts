import { Inject } from '@nestjs/common';
import { Args, Resolver, Query } from '@nestjs/graphql';
import { IGetTimeSeriesDataUseCase } from 'src/domain/usecase/time-series';
import { TimeSeriesInput } from '../graphql/typings';

@Resolver('stock')
export class StockResolver {
  constructor(
    @Inject(IGetTimeSeriesDataUseCase)
    private readonly getTimeSeriesDataUseCase: IGetTimeSeriesDataUseCase,
  ) {}

  @Query('getTimeSeriesData')
  async findStock(@Args('query', { nullable: true }) query: TimeSeriesInput) {
    const res = await this.getTimeSeriesDataUseCase.execute(query);

    return res;
  }
}
