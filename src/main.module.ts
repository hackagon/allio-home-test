import { Module } from '@nestjs/common';
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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),

    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: async (): Promise<ApolloDriverConfig> => ({
        path: '/',
        typePaths: ['./**/*.graphql'],
        // definitions: {
        //   path: join(process.cwd(), 'src/graphql/typings.ts'),
        // },
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
export class MainModule {}
