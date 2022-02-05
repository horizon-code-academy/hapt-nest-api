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
  @Min(3)
  teacher?: User[];
  @IsOptional()
  @Min(3)
  students?: User[];
  @IsOptional()
  subject?: Subject;
}
