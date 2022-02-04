import Exam from "src/exam/exam.interface";
import SessionDate from "src/session-date/session-date.interface";
import User from "src/user/user.interface";


export class UpdateExamTestDto {
  exam?: Exam;
  sessionDate?: SessionDate;
  score?: number;
  note?: string;
  student?: User;
}
