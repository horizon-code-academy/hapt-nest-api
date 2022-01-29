import ExamTest from '../../src/exam-test/exam-test.interface';
import { sessionDateA } from './session-date.fake';
import { user } from './user.fake';
import { exam } from './exam.fake';

export const examTest: ExamTest = {
  _id: '1',
  exam: exam,
  sessionDate: sessionDateA,
  score: 10,
  note: 'moyen',
  student: user,
};
export const examTestB: ExamTest = {
  _id: '2',
  exam: exam,
  sessionDate: sessionDateA,
  score: 10,
  note: 'moyen',
  student: user,
};
export const examTestC: ExamTest = {
  _id: '3',
  exam: exam,
  sessionDate: sessionDateA,
  score: 10,
  note: 'moyen',
  student: user,
};

export const examTestList: ExamTest[] = [examTest, examTestB, examTestC];
