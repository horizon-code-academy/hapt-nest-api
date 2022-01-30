import { Session } from '../../session/schemas/session.schema';
import { User } from '../../user/schemas/user.schema';

export class CreateSessionDateDto {
  start_date: Date;
  end_date: Date;
  session: Session;
  attendees: User[];
  teacher: User;
  note?: string;
}
