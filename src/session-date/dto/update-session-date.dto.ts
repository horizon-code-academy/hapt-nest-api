import Session from 'src/session/session.interface';
import SessionDate from 'src/session-date/session-date.interface';
import { IsDate } from 'class-validator';

export class UpdateSessionDateDto {
  @IsDate()
  start_date?: Date;
  @IsDate()
  end_date?: Date;
  session?: Session;
  attendees?: SessionDate[];
  teacher?: SessionDate;
  note?: string;
}
