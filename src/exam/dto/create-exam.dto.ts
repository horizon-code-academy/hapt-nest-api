import { Subject } from '../../subject/schemas/subject.schema';
import { ExamTest } from '../../exam-test/schemas/exam-test.schema';

export class CreateExamDto {
  name: string;
  type: string;
  subject: Subject;
  examTests?: ExamTest[];
}
