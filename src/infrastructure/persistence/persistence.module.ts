import { Module } from '@nestjs/common';
import { PostgresqlModule } from './databases';
import { UserRepository } from './repositories';

@Module({
  imports: [PostgresqlModule],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class PersistenceModule {}
