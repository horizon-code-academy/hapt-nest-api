import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subject, SubjectDocument } from './schemas/subject.schema';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from '../subject/dto/update-subject.dto';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject.name) private subjectModel: Model<SubjectDocument>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    console.log(createSubjectDto);
    const subject = new this.subjectModel(createSubjectDto);
    return await subject.save();
  }

  async findAll(): Promise<Subject[]> {
    return this.subjectModel.find().exec();
  }

  async update(
    id: string,
    updateSubjectDto: UpdateSubjectDto,
  ): Promise</*UpdateResult*/ any> {
    return this.subjectModel.updateOne({ _id: id }, updateSubjectDto);
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.subjectModel.deleteOne({ _id: id });
  }
}
