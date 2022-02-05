import { IsDate, IsString } from 'class-validator';
import { Session } from '../../session/schemas/session.schema';
import { User } from '../../user/schemas/user.schema';

export class CreatedSessionDateDto {
  @IsDate()
  start_date: Date;
  @IsDate()
  end_date: Date;
  @IsString()
  session: Session;
  @IsString()
  attendees: User[];
  @IsString()
  teacher: User;
  @IsString()
  note?: string;
}
