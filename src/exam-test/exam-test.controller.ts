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
import { UpdateExamTestDto } from './dto/update-exam-test.dto';
import { CreateExamTestDto } from './dto/create-exam-test.dto';

@Controller('exam-test')
export class ExamTestController {
  constructor(private readonly ExamTestService: ExamTestService) {}
  @Get()
  findAll() {
    return this.ExamTestService.findAll();
  }

  @Post()
  create(@Body() createExamTestDto: CreateExamTestDto): Promise<ExamTest> {
    return this.ExamTestService.create(createExamTestDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateExamTestDto: UpdateExamTestDto,
  ): Promise<ExamTest> {
    return this.ExamTestService.update(id, updateExamTestDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.ExamTestService.delete(id);
  }
}
