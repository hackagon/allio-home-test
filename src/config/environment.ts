import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, validateSync } from 'class-validator';
import _ from 'lodash';

export class EnvironmentVariables {
  @IsNotEmpty()
  PORT: number;

  @IsNotEmpty()
  SERVICE_NAME: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}

export const config = {
  // app
  PORT: process.env.PORT,
  SERVICE_NAME: process.env.SERVICE_NAME,
  SECRET_KEY: process.env.SECRET_KEY,

  // alphavantage
  ALPHAVANTAGE_HOST: process.env.DB_PORT,
  ALPHAVANTAGE_KEY: process.env.ALPHAVANTAGE_KEY,

  // database
  DB_HOST: process.env.DB_HOST,
  DB_PORT: _.parseInt(process.env.DB_PORT, 10),
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSOWRD: process.env.DB_PASSOWRD,
};
