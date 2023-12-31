import { Test, TestingModule } from '@nestjs/testing';
import { DogController } from './dogs.controller';

describe('DogsController', () => {
  let controller: DogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogController],
    }).compile();

    controller = module.get<DogController>(DogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
