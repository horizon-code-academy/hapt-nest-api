import Exam from './exam.interface';
import User from '../user/user.interface';
import SessionDate from '../session-date/session-date.interface';

export default interface ExamTest {
  exam: Exam;
  sessionDate: SessionDate;
  score?: number;
  note?: string;
  student: User;
}
