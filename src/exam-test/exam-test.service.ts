import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExamTest, ExamTestDocument } from './schemas/exam-test.schema';
import { CreateExamTestDto } from './dto/create-exam-test.dto';

@Injectable()
export class ExamTestService {
  constructor(
    @InjectModel(ExamTest.name) private userModel: Model<ExamTestDocument>,
  ) {}

  async create(createExamTestDto: CreateExamTestDto): Promise<ExamTest> {
    const createdExamTest = new this.userModel(createExamTestDto);
    return createdExamTest.save();
  }

  async findAll(): Promise<ExamTest[]> {
    return this.userModel.find().exec();
  }
}
