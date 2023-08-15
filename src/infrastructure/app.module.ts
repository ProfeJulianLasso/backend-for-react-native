import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController, ExampleController } from './controllers';
import { Example1Filter } from './exception-filters';
import { Example1Middleware } from './middlewares';
import { AppService } from './services';

@Module({
  imports: [],
  controllers: [AppController, ExampleController],
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
