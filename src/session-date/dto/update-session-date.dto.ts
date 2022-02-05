import Session from 'src/session/session.interface';
import SessionDate from 'src/session-date/session-date.interface';

export class UpdateSessionDateDto {
  start_date?: Date;
  end_date?: Date;
  session?: Session;
  attendees?: SessionDate[];
  teacher?: SessionDate;
  note?: string;
}
