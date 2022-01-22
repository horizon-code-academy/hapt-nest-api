import { Test, TestingModule } from '@nestjs/testing';
import { SessionDateService } from './session-date.service';

describe('SessionDateService', () => {
  let service: SessionDateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessionDateService],
    }).compile();

    service = module.get<SessionDateService>(SessionDateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
