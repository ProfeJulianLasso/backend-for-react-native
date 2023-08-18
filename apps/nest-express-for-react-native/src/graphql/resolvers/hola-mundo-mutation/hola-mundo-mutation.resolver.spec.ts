import { Test, TestingModule } from '@nestjs/testing';
import { HolaMundoMutationResolver } from './hola-mundo-mutation.resolver';

describe('HolaMundoMutationResolver', () => {
  let resolver: HolaMundoMutationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HolaMundoMutationResolver],
    }).compile();

    resolver = module.get<HolaMundoMutationResolver>(HolaMundoMutationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
