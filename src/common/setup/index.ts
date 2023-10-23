import { ConfigService } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';

/**
 * Sets up a NestJS application with CORS configuration and retrieves configuration settings.
 *
 * @param app - The NestJS application instance.
 * @returns An object with port information and a logInfo method for logging application details.
 */
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
