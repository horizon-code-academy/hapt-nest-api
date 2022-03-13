import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exam, ExamDocument } from './scheams/exam.schema';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';

@Injectable()
export class ExamService {
  constructor(@InjectModel(Exam.name) private examModel: Model<ExamDocument>) {}

  async create(createExamDto: CreateExamDto): Promise<Exam> {
    const createdExam = new this.examModel(createExamDto);
    return createdExam.save();
  }

  async update(
    id: string,
    updateExamDto: UpdateExamDto,
  ): Promise</*UpdateResult*/ any> {
    return this.examModel.updateOne({ _id: id }, updateExamDto);
  }
  async findAll(): Promise<Exam[]> {
    return this.examModel.find().exec();
  }
  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.examModel.deleteOne({ _id: id });
  }
}
