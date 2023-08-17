import { Test, TestingModule } from '@nestjs/testing';
import { Micro1Controller } from './micro1.controller';

describe('Micro1Controller', () => {
  let controller: Micro1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Micro1Controller],
    }).compile();

    controller = module.get<Micro1Controller>(Micro1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
