import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './controllers/app/app.controller';
import { ExampleController } from './controllers/example/example.controller';
import { Example1Middleware } from './middlewares/example1/example1.middleware';
import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [AppController, ExampleController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Example1Middleware).forRoutes('*');
  }
}
