import { Test, TestingModule } from '@nestjs/testing';
import { ExamTestService } from './exam-test.service';

describe('ExamTestService', () => {
  let service: ExamTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamTestService],
    }).compile();

    service = module.get<ExamTestService>(ExamTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
