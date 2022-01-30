import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subject, SubjectDocument } from './schemas/subject.schema';
import { CreateSubjectDto } from './dto/create-subject.dto';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject.name) private userModel: Model<SubjectDocument>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const createdSubject = new this.userModel(createSubjectDto);
    return createdSubject.save();
  }

  async findAll(): Promise<Subject[]> {
    return this.userModel.find().exec();
  }
}
