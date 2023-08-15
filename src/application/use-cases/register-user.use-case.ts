import { IUserRepository, NewUserCommand, User, UserAggregate } from '@domain';

export class RegisterUserUseCase {
  private readonly aggregateRoot: UserAggregate;

  constructor(private readonly userRepository: IUserRepository<User>) {
    this.aggregateRoot = new UserAggregate();
  }

  execute(command: NewUserCommand): Promise<User> {
    const user = new User(command);
    const newUser = this.aggregateRoot.createUser(user);
    return this.userRepository.register(newUser);
  }
}
