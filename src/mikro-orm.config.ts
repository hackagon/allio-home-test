import { LoadStrategy } from '@mikro-orm/core';
import { defineConfig } from '@mikro-orm/postgresql';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator } from '@mikro-orm/migrations';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { SeedManager } from '@mikro-orm/seeder';
import _ from 'lodash';

export default defineConfig({
  host: process.env.DB_HOST,
  port: _.parseInt(process.env.DB_PORT, 10),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSOWRD,
  dbName: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  debug: true,
  loadStrategy: LoadStrategy.JOINED,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  // @ts-expect-error nestjs adapter option
  registerRequestContext: false,
  extensions: [Migrator, EntityGenerator, SeedManager],
  migrations: {
    path: './migrations',
  },
});
