import ExamTest from "src/exam-test/exam-test.interface";
import Subject from "src/subject/subject.interface";

export class UpdateExamDto {
  label?: string;
  type?: string;
  subject?: Subject;
  examTests?: ExamTest[];
}
