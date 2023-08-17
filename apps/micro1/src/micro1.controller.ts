import { Controller, Get } from '@nestjs/common';
import { Micro1Service } from './micro1.service';

@Controller()
export class Micro1Controller {
  constructor(private readonly micro1Service: Micro1Service) {}

  @Get()
  getHello(): string {
    return this.micro1Service.getHello();
  }
}
