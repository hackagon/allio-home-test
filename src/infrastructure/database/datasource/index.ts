import { LoadStrategy } from '@mikro-orm/core';
import { defineConfig } from '@mikro-orm/postgresql';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator } from '@mikro-orm/migrations';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import { SeedManager } from '@mikro-orm/seeder';
import { config } from 'src/config';
import { UserEntity } from '../entities/user.entity';

export default defineConfig({
  host: config.DB_HOST,
  port: config.DB_PORT,
  user: config.DB_USERNAME,
  password: config.DB_PASSOWRD,
  dbName: config.DB_NAME,
  entities: [UserEntity],
  // entitiesTs: ['src/**/*.entity.ts'],
  debug: true,
  loadStrategy: LoadStrategy.JOINED,
  highlighter: new SqlHighlighter(),
  metadataProvider: TsMorphMetadataProvider,
  // @ts-expect-error nestjs adapter option
  registerRequestContext: false,
  extensions: [Migrator, EntityGenerator, SeedManager],
});
