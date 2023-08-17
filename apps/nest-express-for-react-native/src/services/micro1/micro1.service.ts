import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class Micro1Service {
  constructor(@Inject('MICRO1') private readonly client: ClientProxy) {}

  getHello(): Observable<string> {
    return this.client.send<string>({ cmd: 'hello' }, {});
  }
}
