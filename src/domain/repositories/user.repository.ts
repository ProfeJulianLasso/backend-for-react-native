export interface IUserRepository<User> {
  register(user: User): Promise<User>;
}
