import { session, sessionA, sessionB } from './session.fake';
import { user, userA, userB } from './user.fake';
import { SessionDate } from '../../src/session-date/schemas/session-date.schema';

export const sessionDateA: SessionDate = {
  _id: '1',
  start_date: new Date(2021, 10, 20),
  end_date: new Date(2021, 10, 20),
  session: sessionA,
  attendees: [userA, userB, user],
  teacher: userB,
  note: 'Seance nodeJs',
};
export const sessionDateB: SessionDate = {
  _id: '2',
  start_date: new Date(2021, 10, 20),
  end_date: new Date(2021, 10, 20),
  session: sessionB,
  attendees: [userA, userB, user],
  teacher: userB,
  note: 'Seance nodeJs',
};
export const sessionDateC: SessionDate = {
  _id: '3',
  start_date: new Date(2021, 10, 20),
  end_date: new Date(2021, 10, 20),
  session: session,
  attendees: [userA, userB, user],
  teacher: userB,
  note: 'Seance nodeJs',
};

export const sessionDateList: SessionDate[] = [
  sessionDateA,
  sessionDateB,
  sessionDateC,
];
