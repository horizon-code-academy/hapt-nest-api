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

import { SubjectService } from './subject.service';
import { Subject } from './schemas/subject.schema';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}
}
