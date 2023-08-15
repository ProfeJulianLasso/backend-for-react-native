import { User } from '../entities';

export class UserAggregate {
  createUser(user: User): User {
    return user.create();
  }
}
