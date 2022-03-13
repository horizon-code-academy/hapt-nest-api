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
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { ExamService } from './exam.service';

@Controller('exam')
export class ExamController {
  constructor(private readonly ExamService: ExamService) {}

  @Get()
  findAll() {
    return this.ExamService.findAll();
  }

  @Post()
  create(@Body() createExamDto: CreateExamDto): Promise<Exam> {
    return this.ExamService.create(createExamDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateExamDto: UpdateExamDto,
  ): Promise<Exam> {
    return this.ExamService.update(id, updateExamDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.ExamService.delete(id);
  }
}
