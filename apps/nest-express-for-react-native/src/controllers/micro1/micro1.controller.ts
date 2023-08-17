import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Micro1Service } from '../../services/micro1/micro1.service';

@Controller('micro1')
export class Micro1Controller {
  constructor(private readonly micro1Service: Micro1Service) {}

  @Get()
  getHello(): Observable<string> {
    return this.micro1Service.getHello();
  }
}
