import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { SubjectService } from './subject.service';

import { CreateSubjectDto } from '../subject/dto/create-subject.dto';
import { Subject } from '../subject/schemas/subject.schema';
import { UpdateSubjectDto } from '../subject/dto/update-subject.dto';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  createSubject(@Body() createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.subjectService.create(createSubjectDto);
  }

  @Get()
  findAll() {
    return this.subjectService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    return this.subjectService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.subjectService.delete(id);
  }
}
