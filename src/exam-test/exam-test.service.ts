import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExamTest, ExamTestDocument } from './schemas/exam-test.schema';
import { CreateExamTestDto } from './dto/create-exam-test.dto';
import { UpdateExamTestDto } from './dto/update-exam-test.dto';

@Injectable()
export class ExamTestService {
  constructor(
    @InjectModel(ExamTest.name) private examTestModel: Model<ExamTestDocument>,
  ) { }

  async create(createExamTestDto: CreateExamTestDto): Promise<ExamTest> {
    const createdExamTest = new this.examTestModel(createExamTestDto);
    return createdExamTest.save();
  }

  async update(
    id: string,
    updateExamTestDto: UpdateExamTestDto,
  ): Promise</*UpdateResult*/ any> {
    return this.examTestModel.updateOne({ _id: id }, updateExamTestDto);
  }

  async findAll(): Promise<ExamTest[]> {
    return this.examTestModel.find().exec();
  }
  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.examTestModel.deleteOne({ _id: id });
  }
}
