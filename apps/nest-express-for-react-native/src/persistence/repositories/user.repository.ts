import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToDo, User } from '../entities';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(ToDo)
    private readonly toDoRepository: Repository<ToDo>,
  ) {}

  async findAll(): Promise<User[]> {
    const data = await this.userRepository.find({
      relations: ['toDos'],
    });
    return data.map((user) => {
      user.password = '';
      return user;
    });
  }

  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  createTodo(toDo: ToDo): Promise<ToDo> {
    return this.toDoRepository.save(toDo);
  }
}
