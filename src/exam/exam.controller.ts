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
import Exam from '../exam/exam.interface';
import { ExamService } from './exam.service';

@Controller('exam')
export class ExamController {
  constructor(private readonly ExamService: ExamService) {}

  @Get()
  getExams(@Query('name') name: string, @Query('name') type: string): Exam[] {
    return this.ExamService.getExams(name, type);
  }

  @Get(':id')
  getExam(@Param('id') id: string): Exam {
    return this.ExamService.getExam(id);
  }

  @Post()
  createExam(@Body() exam: Partial<Exam>): Exam {
    return this.ExamService.createExam(exam);
  }

  @Put()
  updateExam(@Body() exam: Partial<Exam>): Exam {
    return this.ExamService.updateExam(exam);
  }

  @Delete(':id')
  deleteExam(@Param('id') id: string): void {
    return this.ExamService.deleteExam(id);
  }
}
