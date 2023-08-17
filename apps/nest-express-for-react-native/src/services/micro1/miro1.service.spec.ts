import { Test, TestingModule } from '@nestjs/testing';
import { Micro1Service } from './micro1.service';

describe('Miro1Service', () => {
  let service: Micro1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Micro1Service],
    }).compile();

    service = module.get<Micro1Service>(Micro1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
