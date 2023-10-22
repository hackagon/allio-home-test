import { QueryDto } from 'src/infrastructure/alphavantage/dto';

export const IGetTimeSeriesDataUseCase = Symbol.for(
  'IGetTimeSeriesDataUseCase',
);

export interface IGetTimeSeriesDataUseCase {
  execute(data: QueryDto): Promise<any>;
}
