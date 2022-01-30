import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SessionDate,
  SessionDateDocument,
} from './schemas/session-date.schema';
import { CreatedSessionDateDto } from './dto/created-session-date.dto';

@Injectable()
export class SessionDateService {
  constructor(
    @InjectModel(SessionDate.name)
    private userModel: Model<SessionDateDocument>,
  ) {}

  async create(
    createdSessionDateDto: CreatedSessionDateDto,
  ): Promise<SessionDate> {
    const createdSessionDate = new this.userModel(createdSessionDateDto);
    return createdSessionDate.save();
  }

  async findAll(): Promise<SessionDate[]> {
    return this.userModel.find().exec();
  }
}
