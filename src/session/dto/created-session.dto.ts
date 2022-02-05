import { User } from '../../user/schemas/user.schema';
import { Subject } from '../../subject/schemas/subject.schema';
import { IsDate } from 'class-validator';

export class CreatedSessionDto {
  label: string;
  @IsDate()
  start_date: Date;
  @IsDate()
  end_date: Date;
  teacher: User[];
  students: User[];
  subject: Subject;
}
