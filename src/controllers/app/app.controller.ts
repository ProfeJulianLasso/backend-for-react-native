import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from '../../services';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getHello1(): string {
    return this.appService.getHello();
  }

  @Put()
  getHello2(): string {
    return this.appService.getHello();
  }

  @Patch()
  getHello3(): string {
    return this.appService.getHello();
  }

  @Delete()
  getHello4(): string {
    return this.appService.getHello();
  }
}
