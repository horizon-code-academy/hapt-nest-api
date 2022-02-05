import Session from 'src/session/session.interface';
import SessionDate from 'src/session-date/session-date.interface';
import { IsDate, IsMongoId, IsOptional, IsString } from 'class-validator';

export class UpdateSessionDateDto {
  @IsDate()
  @IsOptional()
  start_date?: Date;
  @IsDate()
  @IsOptional()
  end_date?: Date;
  @IsOptional()
  @IsMongoId()
  session?: Session;
  @IsOptional()
  @IsMongoId()
  attendees?: SessionDate[];
  @IsOptional()
  @IsMongoId()
  teacher?: SessionDate;
  @IsOptional()
  @IsString()
  note?: string;
}
