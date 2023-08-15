import { ToDoApp } from '@app';
import { NewUserDto, NewUserWithoutPasswordInterceptor } from '@common';
import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { User, UserRepository } from '@persistence';

@Controller('security')
export class SecurityController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post('register-user')
  @UseInterceptors(NewUserWithoutPasswordInterceptor)
  registerUser(@Body() user: NewUserDto): Promise<User> {
    const app = new ToDoApp();
    return app.registerUser(user, this.userRepository);
  }
}
