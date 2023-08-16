import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDo, User } from './entities';
import { UserRepository } from './repositories';

const entities = [User, ToDo];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'password',
      database: 'react-native',
      entities,
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  controllers: [],
  providers: [UserRepository],
  exports: [TypeOrmModule, UserRepository],
})
export class PersistenceModule {}
