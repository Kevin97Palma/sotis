import { Test, TestingModule } from '@nestjs/testing';
import { TokencController } from './tokenc.controller';
import { TokencService } from './tokenc.service';

describe('TokencController', () => {
  let controller: TokencController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokencController],
      providers: [TokencService],
    }).compile();

    controller = module.get<TokencController>(TokencController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
