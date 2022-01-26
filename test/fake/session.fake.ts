import Session from '../../src/session/session.interface';
import { subject } from './subject.fake';
import { user, userA, userB } from './user.fake';

export const session: Session = {
  _id: '1',
  name: 'Dev16',
  start_date: new Date(2021, 10, 20),
  end_date: new Date(2022, 3, 20),
  teacher: [userA],
  students: [user, userB],
  subject: subject,
};

export const sessionA: Session = {
  _id: '2',
  name: 'Dev15',
  start_date: new Date(2021, 10, 20),
  end_date: new Date(2022, 3, 20),
  teacher: [userA],
  students: [user, userB],
  subject: subject,
};

export const sessionB: Session = {
  _id: '3',
  name: 'Dev14',
  start_date: new Date(2021, 10, 20),
  end_date: new Date(2022, 3, 20),
  teacher: [userA],
  students: [user, userB],
  subject: subject,
};

export const sessionList: Session[] = [session, sessionA, sessionB];
