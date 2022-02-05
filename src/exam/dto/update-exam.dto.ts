import { ExamTest } from '../../exam-test/schemas/exam-test.schema';
import { Subject } from '../../subject/schemas/subject.schema';

export class UpdateExamDto {
  label: string;
  type: string;
  subject: Subject;
  examTests?: ExamTest[];
}
