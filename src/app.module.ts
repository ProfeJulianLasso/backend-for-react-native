import { Module } from '@nestjs/common';
import { AppController } from './controllers/app/app.controller';
import { AppService } from './services/app.service';
import { ExampleController } from './controllers/example/example.controller';

@Module({
  imports: [],
  controllers: [AppController, ExampleController],
  providers: [AppService],
})
export class AppModule {}
