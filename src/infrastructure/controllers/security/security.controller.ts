import { ToDoApp } from '@app';
import { Body, Controller, Post } from '@nestjs/common';
import { NewUserDto } from '../../dto';
import { User, UserRepository } from '../../persistence';

@Controller('security')
export class SecurityController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post('register-user')
  registerUser(@Body() user: NewUserDto): Promise<User> {
    const app = new ToDoApp();
    return app.registerUser(user, this.userRepository);
  }
}
