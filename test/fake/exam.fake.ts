import Exam from '../../src/exam/exam.interface';
import { subject } from './subject.fake';
import { examTestList } from './exam-test.fake';

export const exam: Exam = {
  _id: '1',
  name: 'testA',
  type: 'React',
  subject: subject,
  examTests: examTestList,
};
export const examB: Exam = {
  _id: '2',
  name: 'testA',
  type: 'React',
  subject: subject,
  examTests: examTestList,
};
export const examC: Exam = {
  _id: '3',
  name: 'testA',
  type: 'React',
  subject: subject,
  examTests: examTestList,
};

export const examList: Exam[] = [exam, examB, examC];
