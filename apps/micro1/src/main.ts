import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Micro1Module } from './micro1.module';

async function bootstrap() {
  const app = await NestFactory.create(Micro1Module);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 3001,
    },
  });
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       clientId: 'micro1',
  //       brokers: ['localhost:9092'],
  //     },
  //   },
  // });
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  });
  await app.startAllMicroservices();
  console.log(`🚀 Microservice is running on port 3001`);
}
bootstrap();
