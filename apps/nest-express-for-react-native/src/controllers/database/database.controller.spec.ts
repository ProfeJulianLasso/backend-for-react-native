import { Test, TestingModule } from '@nestjs/testing';
import { mockUserRepository } from '../../../mocks';
import { NewUserDto } from '../../dto';
import { User } from '../../persistence/entities';
import { UserRepository } from '../../persistence/repositories';
import { DatabaseController } from './database.controller';

describe('DatabaseController', () => {
  let controller: DatabaseController;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatabaseController],
      providers: [
        {
          provide: UserRepository,
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    controller = module.get<DatabaseController>(DatabaseController);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call findAll', async () => {
    // Arrange
    const user1 = {
      id: '5dc93ae3-6578-4871-af70-d58c1f565649',
      email: 'julian.lasso@sofka.com.co',
      name: 'Julian Lasso',
      password: '',
      status: true,
      createdAt: new Date(),
    } as User;
    const mockResult = new Array<User>();
    mockResult.push(user1);

    const user1expected = {
      id: '5dc93ae3-6578-4871-af70-d58c1f565649',
      email: 'julian.lasso@sofka.com.co',
      name: 'Julian Lasso',
      password: '',
      status: true,
      createdAt: new Date(),
    } as User;
    const usersExpected = new Array<User>();
    usersExpected.push(user1expected);

    jest.spyOn(userRepository, 'findAll').mockResolvedValue(mockResult);
    // .mockReturnValue(Promise.resolve(mockResult));

    // Act
    const result = await controller.findAll();

    // Assert
    expect(result).toEqual(usersExpected);
  });

  it('should call create', async () => {
    // Arrange
    const data = {
      email: 'julian.lasso@gmail.com',
      password: '123456',
    } as NewUserDto;

    const dataExpected = {
      email: 'julian.lasso@gmail.com',
      password: '123456',
    } as NewUserDto;

    const user1 = {
      id: '5dc93ae3-6578-4871-af70-d58c1f565649',
      email: 'julian.lasso@gmail.com',
      password: '',
      status: true,
      createdAt: new Date(),
    } as User;

    const expectedUser = {
      id: '5dc93ae3-6578-4871-af70-d58c1f565649',
      email: 'julian.lasso@gmail.com',
      password: '',
      status: true,
      createdAt: new Date(),
    } as User;
    jest.spyOn(userRepository, 'create').mockResolvedValue(user1);

    // Act
    const result = await controller.create(data);

    // Assert
    expect(result).toEqual(expectedUser);
    expect(userRepository.create).toBeCalledWith(dataExpected);
  });
});
