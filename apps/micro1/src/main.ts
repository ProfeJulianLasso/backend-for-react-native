import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Micro1Module } from './micro1.module';

async function bootstrap() {
  // NestFactory.createMicroservice<MicroserviceOptions>(Micro1Module, {
  //   transport: Transport.TCP,
  //   options: {
  //     port: 3001,
  //   },
  // });
  // await app.startAllMicroservices();

  const app = await NestFactory.create(Micro1Module);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 3001,
    },
  });
  await app.startAllMicroservices();
  console.log(`🚀 Microservice is running on port 3001`);
}
bootstrap();
