import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import * as Dto from './dto';

@Injectable()
export class AlphaVantageRepository {
  constructor(private httpService: HttpService) {}

  async getData(query: Dto.QueryDto): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService
        .request({
          method: 'GET',
          url: process.env.ALPHAVANTAGE_HOST,
          params: {
            ...query,
            interval: '5min',
            apikey: process.env.ALPHAVANTAGE_KEY,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw new InternalServerErrorException(error.message);
          }),
        ),
    );

    return data;
  }
}
