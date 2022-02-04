import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subject, SubjectDocument } from './schemas/subject.schema';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject.name) private subjectModel: Model<SubjectDocument>,
  ) {}

  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const createdSubject = new this.subjectModel({
      ...createSubjectDto,
    });
    return createdSubject.save();
  }

  async update(
    id: string,
    updateSubjectDto: UpdateSubjectDto,
  ): Promise</*UpdateResult*/ any> {
    return this.subjectModel.updateOne({ _id: id }, updateSubjectDto);
  }

  async findAll(): Promise<Subject[]> {
    return this.subjectModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.subjectModel.deleteOne({ _id: id });
  }
}
