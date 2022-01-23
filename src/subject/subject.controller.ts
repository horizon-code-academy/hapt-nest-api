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
import Subject from './subject.interface';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  getSubjects(
    @Query('field') field: string,
    @Query('name') name: string,
    @Query('description') description: string,
  ): Subject[] {
    return this.subjectService.getSubjects(name, field, description);
  }

  @Get(':id')
  getSubject(@Param('id') id: string): Subject {
    return this.subjectService.getSubject(id);
  }

  @Post()
  createSubject(@Body() subject: Partial<Subject>): Subject {
    return this.subjectService.createSubject(subject);
  }

  @Put()
  updateSubject(@Body() subject: Partial<Subject>): Subject {
    return this.subjectService.updateSubject(subject);
  }

  @Delete(':id')
  deleteSubject(@Param('id') id: string): void {
    return this.subjectService.deleteSubject(id);
  }
}
