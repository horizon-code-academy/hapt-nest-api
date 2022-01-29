import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ExamTestService } from './exam-test.service';
import ExamTest from './exam-test.interface';

@Controller('exam-test')
export class ExamTestController {
  constructor(private readonly ExamTestService: ExamTestService) {}

  @Get()
  getExamTests(
    @Query('sessionDateId') sessionDateId: string,
    @Query('examID') examID: string,
    @Query('userID') userID: string,
  ): ExamTest[] {
    return this.ExamTestService.getExamTests(sessionDateId, examID, userID);
  }

  @Get(':id')
  getExamTest(@Param('id') id: string): ExamTest {
    return this.ExamTestService.getExamTest(id);
  }

  @Post()
  createExamTest(@Body() examTest: Partial<ExamTest>): ExamTest {
    return this.ExamTestService.createExamTest(examTest);
  }

  @Put()
  updateExamTest(@Body() examTest: Partial<ExamTest>): ExamTest {
    return this.ExamTestService.updateExamTest(examTest);
  }

  @Delete(':id')
  deleteExamTest(@Param('id') id: string): void {
    return this.ExamTestService.deleteExamTest(id);
  }
}
