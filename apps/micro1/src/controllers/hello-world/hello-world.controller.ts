import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class HelloWorldController {
  @MessagePattern({ cmd: 'hello' })
  helloWorld(): string {
    return 'Hello World!';
  }

  @EventPattern('user_created')
  async handleUserCreated() {
    // business logic
  }
}
