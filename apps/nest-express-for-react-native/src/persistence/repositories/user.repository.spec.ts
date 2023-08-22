import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToDo, User } from '../entities';
import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  let repository: UserRepository;
  let userRepository: Repository<User>;
  let toDoRepository: Repository<ToDo>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRepository,
        {
          provide: getRepositoryToken(User),
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getRepositoryToken(ToDo),
          useValue: {
            save: jest.fn(),
          },
        },
      ],
    }).compile();
    repository = module.get<UserRepository>(UserRepository);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    toDoRepository = module.get<Repository<ToDo>>(getRepositoryToken(ToDo));
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      // Arrange
      const date = new Date();

      const user1 = new User();
      user1.id = '1';
      user1.email = 'julian.lasso@sofka.com.co';
      user1.password = '123456';
      user1.toDos = [];
      user1.createdAt = date;
      user1.status = true;

      const dataMock = new Array<User>();
      dataMock.push(user1);

      const user2 = new User();
      user2.id = '1';
      user2.email = 'julian.lasso@sofka.com.co';
      user2.password = '';
      user2.toDos = [];
      user2.createdAt = date;
      user2.status = true;

      const userExpected = new Array<User>();
      userExpected.push(user2);

      jest.spyOn(userRepository, 'find').mockResolvedValue(dataMock);

      // Act
      const result = await repository.findAll();

      // Assert
      expect(result).toEqual(userExpected);
    });
  });
});
