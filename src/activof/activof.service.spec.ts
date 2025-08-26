import { Test, TestingModule } from '@nestjs/testing';
import { ActivofService } from './activof.service';

describe('ActivofService', () => {
  let service: ActivofService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivofService],
    }).compile();

    service = module.get<ActivofService>(ActivofService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
