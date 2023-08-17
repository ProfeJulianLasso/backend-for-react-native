import { Injectable } from '@nestjs/common';

@Injectable()
export class Micro1Service {
  getHello(): string {
    return 'Hello World!';
  }
}
