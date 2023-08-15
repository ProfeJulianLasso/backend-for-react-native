import { IUserRepository, NewUserCommand, User } from '@domain';
import { RegisterUserUseCase } from './use-cases';

export class ToDoApp {
  registerUser(
    command: NewUserCommand,
    userRepository: IUserRepository<User>,
  ): Promise<User> {
    const useCase = new RegisterUserUseCase(userRepository);
    return useCase.execute(command);
  }
}
