import { Controller, Get } from '@nestjs/common';
import { SubjectService } from './subject.service';
import Subject from './subject.interface';

@Controller('subject')
export class SubjectController {
  constructor(private readonly SubjectService: SubjectService) {}
  @Get()
  getSubject(): Subject {
    return this.SubjectService.getSubject();
  }
}
