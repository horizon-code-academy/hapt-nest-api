import Subject from '../subject/subject.interface';
import ExamTest from '../exam-test/exam-test.interface';

export default interface Exam {
  _id: string;
  name: string;
  type: string;
  subject: Subject;
  examTests?: ExamTest[];
}
