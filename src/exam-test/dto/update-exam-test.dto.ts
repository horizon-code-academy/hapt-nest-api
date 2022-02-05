import { IsMongoId, IsNumberString, IsOptional, IS_LENGTH, Length, length, Max, max, maxLength, MaxLength, Min, min, minLength, MinLength } from 'class-validator';
import Exam from 'src/exam/exam.interface';
import SessionDate from 'src/session-date/session-date.interface';
import User from 'src/user/user.interface';

export class UpdateExamTestDto {
  @IsMongoId()
  @IsOptional()
  exam?: Exam;
  @IsMongoId()
  @IsOptional()
  sessionDate?: SessionDate;
  @Length(0, 100)
  @IsOptional()
  score?: number;
  @IsOptional()
  note?: string;
  @IsMongoId()
  @IsOptional()
  student?: User;
}
