import { IsDate } from 'class-validator';
import Subject from 'src/subject/subject.interface';
import User from 'src/user/user.interface';

export class UpdateSessionDto {
  label?: string;
  @IsDate()
  start_date?: Date;
  @IsDate()
  end_date?: Date;
  teacher?: User[];
  students?: User[];
  subject?: Subject;
}
