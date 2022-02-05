import { User } from '../../user/schemas/user.schema';
import { Subject } from '../../subject/schemas/subject.schema';
import { IsDate, IsOptional, IsString, Min } from 'class-validator';

export class CreatedSessionDto {
  @IsString()
  label: string;
  @IsDate()
  @IsOptional()
  start_date: Date;
  @IsDate()
  @IsOptional()
  end_date: Date;
  @IsOptional()
  teacher: User[];
  @IsOptional()
  students: User[];
  subject: Subject;
}
