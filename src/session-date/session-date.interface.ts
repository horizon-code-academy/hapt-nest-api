import Session from '../session/session.interface';
import User from '../user/user.interface';

export default interface SessionDate {
  _id: string;
  start_date: Date;
  end_date: Date;
  session: Session;
  attendees: User[];
  teacher: User;
  note?: string;
}
