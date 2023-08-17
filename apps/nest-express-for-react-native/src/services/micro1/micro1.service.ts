import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class Micro1Service {
  constructor(
    @Inject('MICRO1') private readonly client: ClientProxy,
    @Inject('MICRO1_KAFKA') private readonly broker: ClientProxy,
  ) {}

  getHello(): Observable<string> {
    return this.client.send<string>({ cmd: 'hello' }, {});
  }

  sumar(num1: number, num2: number): Observable<any[]> {
    return this.client.send<any[]>(
      { cmd: 'sumar' },
      {
        num1,
        num2,
      },
    );
  }

  createUser(data: string): void {
    this.client.emit('micro1.create-user', data);
  }

  createHero(data: string): void {
    this.broker.emit('micro1.create-hero', { data });
  }
}
