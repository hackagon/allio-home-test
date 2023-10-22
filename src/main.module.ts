import { MiddlewareConsumer, Module } from '@nestjs/common';
import { PresentationModule } from './presentation';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  DateTimeResolver,
  EmailAddressResolver,
  UnsignedIntResolver,
} from 'graphql-scalars';
import { GraphQLJSONObject } from 'graphql-type-json';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MikroOrmMiddleware, MikroOrmModule } from '@mikro-orm/nestjs';
import { MikroORM } from '@mikro-orm/core';
import datasource from './mikro-orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),

    MikroOrmModule.forRoot(datasource),

    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: async (): Promise<ApolloDriverConfig> => ({
        path: '/',
        typePaths: ['./**/*.graphql'],
        resolvers: {
          DateTime: DateTimeResolver,
          EmailAddress: EmailAddressResolver,
          UnsignedInt: UnsignedIntResolver,
          JSONObject: GraphQLJSONObject,
        },
        playground: true,
      }),
    }),
    PresentationModule,
  ],
})
export class MainModule {
  constructor(private readonly orm: MikroORM) {}

  async onModuleInit(): Promise<void> {
    await this.orm.getMigrator().up();
  }

  // for some reason the auth middlewares in profile and article modules are fired before the request context one,
  // so they would fail to access contextual EM. by registering the middleware directly in AppModule, we can get
  // around this issue
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MikroOrmMiddleware).forRoutes('*');
  }
}
