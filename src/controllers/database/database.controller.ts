import { Body, Controller, Get, Post } from '@nestjs/common';
import { NewUserDto } from 'src/dto';
import { ToDo, User } from '../../persistence/entities';
import { UserRepository } from '../../persistence/repositories';

@Controller('database')
export class DatabaseController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get('users')
  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  @Post('create')
  create(@Body() user: NewUserDto): Promise<User> {
    const newUser = new User();
    newUser.email = user.email;
    newUser.password = user.password;
    return this.userRepository.create(newUser);
  }

  @Post('create-todo')
  createTodo(): Promise<ToDo> {
    const user = new User();
    user.id = '5dc93ae3-6578-4871-af70-d58c1f565649';

    const newToDo = new ToDo();
    newToDo.title = 'New ToDo';
    newToDo.description = 'New ToDo description';
    newToDo.user = user;

    return this.userRepository.createTodo(newToDo);
  }
}
