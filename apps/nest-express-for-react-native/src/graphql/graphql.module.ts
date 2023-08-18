import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path';
import { HolaMundoResolver } from './resolvers/hola-mundo/hola-mundo.resolver';
import { HolaMundoMutationResolver } from './resolvers/hola-mundo-mutation/hola-mundo-mutation.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'graphql', 'schema.gql'),
      sortSchema: true,
    }),
  ],
  providers: [HolaMundoResolver, HolaMundoMutationResolver],
})
export class GraphqlModule {}
