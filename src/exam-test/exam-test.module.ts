import { Module } from '@nestjs/common';
import { ExamTestController } from './exam-test.controller';
import { ExamTestService } from './exam-test.service';

@Module({
  controllers: [ExamTestController],
  providers: [ExamTestService],
})
export class ExamTestModule {}
