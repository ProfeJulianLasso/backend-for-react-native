import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  AppController,
  DatabaseController,
  ExampleController,
} from './controllers';
import { Micro1Controller } from './controllers/micro1/micro1.controller';
import { Example1Filter } from './exception-filters';
import { Example1Middleware } from './middlewares';
import { PersistenceModule } from './persistence';
import { AppService } from './services';
import { Micro1Service } from './services/micro1/micro1.service';

@Module({
  imports: [
    PersistenceModule,
    ClientsModule.register([
      {
        name: 'MICRO1',
        transport: Transport.TCP,
        options: {
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [
    AppController,
    ExampleController,
    DatabaseController,
    Micro1Controller,
  ],
  providers: [
    AppService,
    Micro1Service,
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
