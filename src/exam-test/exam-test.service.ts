import { HttpException, Injectable } from '@nestjs/common';
import ExamTest from './exam-test.interface';
import { examTestList } from '../../test/fake/exam-test.fake';

@Injectable()
export class ExamTestService {
  getExamTest(id: string): ExamTest {
    const result = examTestList.find((u) => u._id === id);
    if (result) return result;
    else throw new HttpException('Not found', 404);
  }

  getExamTests(
    sessionDateId: string,
    examID: string,
    userID: string,
  ): ExamTest[] {
    if (sessionDateId || examID || userID)
      return examTestList.filter(
        (u) =>
          u.sessionDate._id === sessionDateId ||
          u.exam._id === examID ||
          u.student._id === userID,
      );
    else return examTestList;
  }

  createExamTest(examTest: Partial<ExamTest>): ExamTest {
    return examTest as ExamTest;
  }

  updateExamTest(examTest: Partial<ExamTest>): ExamTest {
    return examTest as ExamTest;
  }

  deleteExamTest(id: string): void {
    console.log('DELETED ' + id);
  }
}
