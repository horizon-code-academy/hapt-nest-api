import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExamService } from './exam.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { Exam } from './scheams/exam.schema';
import { UpdateExamDto } from './dto/update-exam.dto';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get()
  findAll() {
    return this.examService.findAll();
  }

  @Post()
  create(@Body() createExamDto: CreateExamDto): Promise<Exam> {
    return this.examService.create(createExamDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateExamDto: UpdateExamDto,
  ): Promise<Exam> {
    return this.examService.update(id, updateExamDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.examService.delete(id);
  }
}
