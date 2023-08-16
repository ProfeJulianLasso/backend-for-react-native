import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import {
  AppController,
  DatabaseController,
  ExampleController,
} from './controllers';
import { Example1Filter } from './exception-filters';
import { Example1Middleware } from './middlewares';
import { PersistenceModule } from './persistence';
import { AppService } from './services';

@Module({
  imports: [PersistenceModule],
  controllers: [AppController, ExampleController, DatabaseController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: Example1Filter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Example1Middleware).forRoutes('*');
  }
}
