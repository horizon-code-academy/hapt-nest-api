import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ExamTestService } from './exam-test.service';

import { CreateExamTestDto } from './dto/create-exam-test.dto';
import { UpdateExamTestDto } from './dto/update-exam-test.dto';
import { ExamTest } from './schemas/exam-test.schema';

@Controller('exam-test')
export class ExamTestController {
  constructor(private readonly examTestService: ExamTestService) {}

  @Get()
  findAll() {
    return this.examTestService.findAll();
  }

  @Post()
  create(@Body() createExamTestDto: CreateExamTestDto): Promise<ExamTest> {
    return this.examTestService.create(createExamTestDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateExamTestDto: UpdateExamTestDto,
  ): Promise<ExamTest> {
    return this.examTestService.update(id, updateExamTestDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.examTestService.delete(id);
  }
}
