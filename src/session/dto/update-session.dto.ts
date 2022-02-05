import { IsDate, IsOptional, IsString, Min, MinDate } from 'class-validator';
import Subject from 'src/subject/subject.interface';
import User from 'src/user/user.interface';

export class UpdateSessionDto {
  @IsString()
  label?: string;
  @IsDate()
  @IsOptional()
  start_date?: Date;
  @IsDate()
  @IsOptional()
  end_date?: Date;
  @IsOptional()
  teacher?: User[];
  @IsOptional()
  students?: User[];
  subject?: Subject;
}
