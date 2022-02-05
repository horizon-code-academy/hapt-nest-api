import { Exam } from '../../exam/scheams/exam.schema';
import { SessionDate } from '../../session-date/schemas/session-date.schema';
import { User } from '../../user/schemas/user.schema';

export class UpdateExamTestDto {
  exam: Exam;
  sessionDate: SessionDate;
  score?: number;
  note?: string;
  student: User;
}
