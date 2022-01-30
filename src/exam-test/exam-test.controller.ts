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
}
