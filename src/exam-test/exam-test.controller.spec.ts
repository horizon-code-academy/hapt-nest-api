import { Test, TestingModule } from '@nestjs/testing';
import { ExamTestController } from './exam-test.controller';

describe('ExamTestController', () => {
  let controller: ExamTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamTestController],
    }).compile();

    controller = module.get<ExamTestController>(ExamTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
