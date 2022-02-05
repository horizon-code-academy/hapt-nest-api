import { IsDate, IsMongoId, IsString, MinLength } from 'class-validator';
import { Session } from '../../session/schemas/session.schema';
import { User } from '../../user/schemas/user.schema';

export class CreatedSessionDateDto {
  @IsDate()
  start_date: Date;
  @IsDate()
  end_date: Date;
  @IsMongoId()
  session: Session;
  @IsMongoId()
  attendees: User[];
  @IsMongoId()
  teacher: User;
  @IsString()
  @MinLength(2)
  note?: string;
}
