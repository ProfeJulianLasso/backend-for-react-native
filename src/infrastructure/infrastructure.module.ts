import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { Example1Filter, Example1Middleware } from './common';
import { ApiModule } from './presentation';
import { AppService } from './services';

@Module({
  imports: [ApiModule],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: Example1Filter,
    },
  ],
})
export class InfrastructureModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Example1Middleware).forRoutes('*');
  }
}
