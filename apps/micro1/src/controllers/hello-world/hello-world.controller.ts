import { Controller } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RedisContext,
  TcpContext,
} from '@nestjs/microservices';
import { Observable, from } from 'rxjs';

@Controller()
export class HelloWorldController {
  @MessagePattern({ cmd: 'hello' })
  helloWorld(): string {
    return 'Hello World!';
  }

  @MessagePattern({ cmd: 'sumar' })
  sumar(data: { num1: number; num2: number }): Observable<any> {
    const response = data.num1 + data.num2;
    return from([response, {}]);
  }

  @EventPattern('micro1.create-user')
  async handleUserCreated(@Payload() data: string, @Ctx() context: TcpContext) {
    console.log('---------------------------');
    console.log(context.getArgs());
    console.log('---------------------------');
    console.log(context.getPattern());
    console.log('---------------------------');
    console.log(context.getSocketRef());
    console.log('Hello World! ' + data);
    return 'Hello World! ' + data;
  }

  @EventPattern('micro1.create-hero')
  async handleHeroCreated(
    @Payload() data: { data: string },
    @Ctx() context: RedisContext,
  ) {
    console.log('data', data);
    console.log('---------------------------');
    console.log(context);
    return 'Procesando datos';
  }
}
