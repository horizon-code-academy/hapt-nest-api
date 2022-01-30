import { User } from '../../user/schemas/user.schema';
import { Subject } from '../../subject/schemas/subject.schema';

export class CreatedSessionDto {
  label: string;
  start_date: Date;
  end_date: Date;
  teacher: User[];
  students: User[];
  subject: Subject;
}
