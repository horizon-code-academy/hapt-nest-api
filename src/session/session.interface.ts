import User from '../user/user.interface';
import Subject from '../subject/subject.interface';

export default interface Session {
  label: string;
  start_date: Date;
  end_date: Date;
  teacher: User[];
  students: User[];
  subject: Subject;
}
