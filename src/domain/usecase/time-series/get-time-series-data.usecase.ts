import { Injectable } from '@nestjs/common';
import _ from 'lodash';
import { AlphaVantageRepository } from 'src/infrastructure/alphavantage/alphavantage.repository';
import { timeIntetvalMapper } from 'src/infrastructure/alphavantage/utils';
import { QueryDto } from 'src/infrastructure/alphavantage/dto';
import { IGetTimeSeriesDataUseCase } from './i-get-time-series-data.usecase';

@Injectable()
export class GetTimeSeriesDataUseCase implements IGetTimeSeriesDataUseCase {
  constructor(private alphaVantageRepository: AlphaVantageRepository) {}

  async execute(query: QueryDto): Promise<any> {
    const data = await this.alphaVantageRepository.getData(query);

    const response = {
      meta: {
        information: data['Meta Data']['1. Information'],
        symbol: data['Meta Data']['2. Symbol'],
        lastRefreshed: data['Meta Data']['3. Last Refreshed'],
        interval: data['Meta Data']['4. Interval'],
        outputSize: data['Meta Data']['5. Output Size'],
        timezone: data['Meta Data']['6. Time Zone'],
      },
      data: _.map(
        data[`Time Series (${timeIntetvalMapper[query.interval]})`],
        (value, key) => ({
          datetime: key,
          open: value['1. open'],
          high: value['2. high'],
          low: value['3. low'],
          close: value['4. close'],
          volume: value['5. volume'],
        }),
      ),
      pagination: {},
    };

    return response;
  }
}
