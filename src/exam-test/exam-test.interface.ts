import User from '../user/user.interface';
import SessionDate from '../session-date/session-date.interface';
import Exam from '../exam/exam.interface';

export default interface ExamTest {
  _id: string;
  exam: Exam;
  sessionDate: SessionDate;
  score?: number;
  note?: string;
  student: User;
}
