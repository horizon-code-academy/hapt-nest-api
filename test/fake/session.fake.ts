import Session from '../../src/session/session.interface';
import { user, userA } from './user.fake';

export const session: Session = {
  name: 'Dev16',
  start_date: new Date(2021, 10, 20),
  end_date: new Date(2022, 3, 20),
  teacher: [userA],
  students: [user],
  subject: {
    name: 'React',
    field: 'string',
    nb_hour: 300,
    price_hour: 15,
    description: 'React , redux , hooks ,  router',
  },
};
