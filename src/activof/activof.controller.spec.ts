import { Test, TestingModule } from '@nestjs/testing';
import { ActivofController } from './activof.controller';
import { ActivofService } from './activof.service';

describe('ActivofController', () => {
  let controller: ActivofController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivofController],
      providers: [ActivofService],
    }).compile();

    controller = module.get<ActivofController>(ActivofController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
