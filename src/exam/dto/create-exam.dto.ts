import { Subject } from '../../subject/schemas/subject.schema';
import { ExamTest } from '../../exam-test/schemas/exam-test.schema';
import { IsString, IsOptional } from 'class-validator';

export class CreateExamDto {
  @IsString()
  @IsOptional()
  label: string;
  @IsString()
  type: string;
  subject: Subject;
  examTests?: ExamTest[];
}
