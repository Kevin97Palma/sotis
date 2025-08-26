import { Test, TestingModule } from '@nestjs/testing';
import { ActivolService } from './activol.service';

describe('ActivolService', () => {
  let service: ActivolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivolService],
    }).compile();

    service = module.get<ActivolService>(ActivolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
