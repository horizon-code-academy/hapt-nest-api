import Session from '../../src/session/session.interface';
import { subject } from './subject.fake';
import { user, userA } from './user.fake';

export const session: Session = {
  _id: '1',
  name: 'Dev16',
  start_date: new Date(2021, 10, 20),
  end_date: new Date(2022, 3, 20),
  teacher: [userA],
  students: [user],
  subject: subject,
};
