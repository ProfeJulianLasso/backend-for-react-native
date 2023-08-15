import { Module } from '@nestjs/common';
import { PersistenceModule } from '@persistence';
import { ServicesModule } from '@services';
import { AppController } from './app';
import { ExampleController } from './example';
import { SecurityController } from './security';

@Module({
  imports: [ServicesModule, PersistenceModule],
  controllers: [AppController, ExampleController, SecurityController],
})
export class ApiModule {}
