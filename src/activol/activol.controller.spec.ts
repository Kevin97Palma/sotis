import { Test, TestingModule } from '@nestjs/testing';
import { ActivolController } from './activol.controller';
import { ActivolService } from './activol.service';

describe('ActivolController', () => {
  let controller: ActivolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivolController],
      providers: [ActivolService],
    }).compile();

    controller = module.get<ActivolController>(ActivolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
