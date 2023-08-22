import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../../services';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;
  const getHelloMock = jest.fn();

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getHello: getHelloMock,
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  it('should be defined', () => {
    // Arrange

    // Act

    // Assert
    expect(appController).toBeDefined();
  });

  it('should return "Testing"', () => {
    // Arrange
    const expectedResult = 'Testing';
    const mockResult = 'Testing';
    jest.spyOn(appService, 'getHello').mockReturnValue(mockResult);

    // Act
    const result = appController.getHello();

    // Assert
    expect(result).toBe(expectedResult);
    expect(appService.getHello).toBeCalled();
  });
});
