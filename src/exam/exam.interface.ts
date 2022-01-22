import Subject from '../subject/subject.interface';
import ExamTest from './exam-test.interface';

export default interface Exam {
  name: string;
  type: string;
  subject: Subject;
  examTests?: ExamTest[];
}
