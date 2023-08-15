import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPg } from './entities';
import { UserPgRepository } from './repositories';

const entities = [UserPg];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'password',
      database: 'to-do',
      entities,
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  providers: [UserPgRepository],
  exports: [TypeOrmModule, UserPgRepository],
})
export class PostgresqlModule {}
