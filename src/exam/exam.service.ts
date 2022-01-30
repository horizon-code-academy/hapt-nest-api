import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Exam, ExamDocument } from './scheams/exam.schema';
import { CreateExamDto } from './dto/create-exam.dto';

@Injectable()
export class ExamService {
  constructor(@InjectModel(Exam.name) private userModel: Model<ExamDocument>) {}

  async create(createExamDto: CreateExamDto): Promise<Exam> {
    const createdExam = new this.userModel(createExamDto);
    return createdExam.save();
  }

  async findAll(): Promise<Exam[]> {
    return this.userModel.find().exec();
  }
}
