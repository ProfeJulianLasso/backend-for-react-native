import { NestFactory } from '@nestjs/core';
import { Micro1Module } from './micro1.module';

async function bootstrap() {
  const app = await NestFactory.create(Micro1Module);
  await app.listen(3000);
}
bootstrap();
