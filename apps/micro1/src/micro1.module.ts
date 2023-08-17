import { Module } from '@nestjs/common';
import { HelloWorldController } from './controllers/hello-world/hello-world.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [HelloWorldController],
})
export class Micro1Module {}
