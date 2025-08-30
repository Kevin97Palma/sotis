import { Test, TestingModule } from '@nestjs/testing';
import { TokencService } from './tokenc.service';

describe('TokencService', () => {
  let service: TokencService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokencService],
    }).compile();

    service = module.get<TokencService>(TokencService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
