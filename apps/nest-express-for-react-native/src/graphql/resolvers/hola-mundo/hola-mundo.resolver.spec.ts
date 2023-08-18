import { Test, TestingModule } from '@nestjs/testing';
import { HolaMundoResolver } from './hola-mundo.resolver';

describe('HolaMundoResolver', () => {
  let resolver: HolaMundoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HolaMundoResolver],
    }).compile();

    resolver = module.get<HolaMundoResolver>(HolaMundoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
