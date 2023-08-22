import { Test, TestingModule } from '@nestjs/testing';
import { firstValueFrom } from 'rxjs';
import { HelloWorldController } from './hello-world.controller';

describe('HelloWorldController', () => {
  let controller: HelloWorldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldController],
    }).compile();

    controller = module.get<HelloWorldController>(HelloWorldController);
  });

  it('should be defined', () => {
    // Arrange

    // Act

    // Assert
    expect(controller).toBeDefined();
  });

  it('should return "Hello World!"', () => {
    // Arrange
    const expectedResult = 'Hello World!';

    // Act
    const result = controller.helloWorld();

    // Assert
    expect(result).toBe(expectedResult);
  });

  it('not should return "Hello World!"', () => {
    // Arrange
    const expectedResult = 'hello world!';

    // Act
    const result = controller.helloWorld();

    // Assert
    expect(result).not.toBe(expectedResult);
  });

  it('should return 3', (done) => {
    // Arrange
    const expectedResult = 3;
    const dataFake = { num1: 1, num2: 2 };

    // Act
    const result = controller.sumar(dataFake);
    const data = firstValueFrom(result);

    // Assert
    data.then((value) => {
      expect(value).toBe(expectedResult);
      done();
    });

    // result.subscribe({
    //   next: (value) => {
    //     expect(value).toBe(expectedResult);
    //   },
    //   error(err) {
    //     console.error('Error: ' + err);
    //   },
    //   complete() {
    //     done();
    //   },
    // });
  });
});
