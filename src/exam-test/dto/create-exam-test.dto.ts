import { IsMongoId, IsOptional, Length, length } from 'class-validator';
import { Exam } from '../../exam/scheams/exam.schema';
import { SessionDate } from '../../session-date/schemas/session-date.schema';
import { User } from '../../user/schemas/user.schema';

export class CreateExamTestDto {
  @IsMongoId()
  exam: Exam;
  @IsMongoId()
  sessionDate: SessionDate;
  @Length(0, 100)
  @IsOptional()
  score?: number;
  @IsOptional()
  note?: string;
  @IsMongoId()
  student: User;
}
