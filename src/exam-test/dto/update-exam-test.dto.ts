import { IsNumberString, IsOptional } from 'class-validator';
import Exam from 'src/exam/exam.interface';
import SessionDate from 'src/session-date/session-date.interface';
import User from 'src/user/user.interface';

export class UpdateExamTestDto {
  @IsOptional()
  exam?: Exam;
  @IsOptional()
  sessionDate?: SessionDate;
  @IsOptional()
  score?: number;
  @IsNumberString()
  @IsOptional()
  note?: string;
  @IsOptional()
  student?: User;
}
