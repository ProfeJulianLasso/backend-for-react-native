import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './controllers/app/app.controller';
import { ExampleController } from './controllers/example/example.controller';
import { Example1Filter } from './exception-filters/example1/example1.filter';
import { Example1Middleware } from './middlewares/example1/example1.middleware';
import { AppService } from './services/app.service';

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
