import { Module } from '@nestjs/common';
import { ExamTestController } from './exam-test.controller';
import { ExamTestService } from './exam-test.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamTest, ExamTestSchema } from './schemas/exam-test.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ExamTest.name, schema: ExamTestSchema },
    ]),
  ],
  controllers: [ExamTestController],
  providers: [ExamTestService],
})
export class ExamTestModule {}
