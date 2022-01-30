import { HttpException, Injectable } from '@nestjs/common';

import { examList } from '../../test/fake/exam.fake';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Exam, ExamDocument } from './scheams/exam.schema';

@Injectable()
export class ExamService {
  constructor(@InjectModel(Exam.name) private userModel: Model<ExamDocument>) {}

  getExam(id: string): Exam {
    const result = examList.find((u) => u.name === id);
    if (result) return result;
    else throw new HttpException('Not found', 404);
  }

  getExams(name: string, type: string): Exam[] {
    if (name || type)
      return examList.filter((u) => u.name === name || u.type === type);
    else return examList;
  }

  createExam(exam: Partial<Exam>): Exam {
    return exam as Exam;
  }

  updateExam(exam: Partial<Exam>): Exam {
    return exam as Exam;
  }

  deleteExam(id: string): void {
    console.log('DELETED ' + id);
  }
}
