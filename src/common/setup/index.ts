import { ConfigService } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';
import _ from 'lodash';

const setUpApplication = (app: INestApplication) => {
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: [
      'Content-Type',
      'Accept',
      'Authorization',
      'X-Requested-With',
    ],
  });
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  return {
    port,
    logInfo: () =>
      // eslint-disable-next-line no-console
      console.table({
        port,
        service: configService.get('SERVICE_NAME'),
      }),
  };
};

export default setUpApplication;
