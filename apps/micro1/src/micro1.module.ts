import { Module } from '@nestjs/common';
import { Micro1Controller } from './micro1.controller';
import { Micro1Service } from './micro1.service';

@Module({
  imports: [],
  controllers: [Micro1Controller],
  providers: [Micro1Service],
})
export class Micro1Module {}
