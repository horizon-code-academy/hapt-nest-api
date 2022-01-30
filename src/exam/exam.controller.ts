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
}
