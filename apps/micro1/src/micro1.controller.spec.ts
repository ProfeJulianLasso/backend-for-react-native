import { Test, TestingModule } from '@nestjs/testing';
import { Micro1Controller } from './micro1.controller';
import { Micro1Service } from './micro1.service';

describe('Micro1Controller', () => {
  let micro1Controller: Micro1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Micro1Controller],
      providers: [Micro1Service],
    }).compile();

    micro1Controller = app.get<Micro1Controller>(Micro1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(micro1Controller.getHello()).toBe('Hello World!');
    });
  });
});
