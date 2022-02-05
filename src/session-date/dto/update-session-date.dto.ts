import Session from 'src/session/session.interface';
import SessionDate from 'src/session-date/session-date.interface';
import { IsDate, IsOptional } from 'class-validator';

export class UpdateSessionDateDto {
  @IsDate()
  @IsOptional()
  start_date?: Date;
  @IsDate()
  @IsOptional()
  end_date?: Date;
  @IsOptional()
  session?: Session;
  @IsOptional()
  attendees?: SessionDate[];
  @IsOptional()
  teacher?: SessionDate;
  @IsOptional()
  note?: string;
}
