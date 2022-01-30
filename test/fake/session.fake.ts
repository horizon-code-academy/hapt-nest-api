import { Session } from '../../src/session/schemas/session.schema';
import { user, userA, userB } from './user.fake';
import { subject } from './subject.fake';

export const session: Session = {
  name: 'Dev16',
  start_date: new Date(2021, 10, 20),
  end_date: new Date(2022, 3, 20),
  teacher: [userA],
  students: [user, userB],
  subject: subject,
};

export const sessionA: Session = {
  name: 'Dev15',
  start_date: new Date(2021, 10, 20),
  end_date: new Date(2022, 3, 20),
  teacher: [userA],
  students: [user, userB],
  subject: subject,
};

export const sessionB: Session = {
  name: 'Dev14',
  start_date: new Date(2021, 10, 20),
  end_date: new Date(2022, 3, 20),
  teacher: [userA],
  students: [user, userB],
  subject: subject,
};

export const sessionList: Session[] = [session, sessionA, sessionB];
