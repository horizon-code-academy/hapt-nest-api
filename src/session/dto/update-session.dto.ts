import Subject from 'src/subject/subject.interface';
import User from 'src/user/user.interface';

export class UpdateSessionDto {
  label?: string;
  start_date?: Date;
  end_date?: Date;
  teacher?: User[];
  students?: User[];
  subject?: Subject;
}
