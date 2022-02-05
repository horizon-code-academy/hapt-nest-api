import { IsMongoId, IsOptional } from 'class-validator';
import { Exam } from '../../exam/scheams/exam.schema';
import { SessionDate } from '../../session-date/schemas/session-date.schema';
import { User } from '../../user/schemas/user.schema';

export class CreateExamTestDto {
  @IsMongoId()
  exam: Exam;
  @IsMongoId()
  sessionDate: SessionDate;
  @IsOptional()
  score?: number;
  @IsOptional()
  note?: string;
  student: User;
}
