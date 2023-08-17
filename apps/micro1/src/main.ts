import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Micro1Module } from './micro1.module';

async function bootstrap() {
  await NestFactory.createMicroservice<MicroserviceOptions>(Micro1Module, {
    transport: Transport.TCP,
    options: {
      port: 3001,
    },
  });
  // await app.startAllMicroservices();
  console.log(`🚀 Microservice is running on port 3001`);
}
bootstrap();
