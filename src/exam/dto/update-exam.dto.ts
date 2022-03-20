import { IsMongoId, IsOptional } from 'class-validator';
import ExamTest from 'src/exam-test/exam-test.interface';
import Subject from 'src/subject/subject.interface';

export class UpdateExamDto {
  @IsMongoId()
  @IsOptional()
  _id?: string;
  label?: string;
  type?: string;
  subject?: Subject;
  examTests?: ExamTest[];
}
