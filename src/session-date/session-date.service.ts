import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SessionDate,
  SessionDateDocument,
} from './schemas/session-date.schema';
import { CreatedSessionDateDto } from './dto/created-session-date.dto';
import { UpdateSessionDateDto } from './dto/update-session-date.dto';

@Injectable()
export class SessionDateService {
  constructor(
    @InjectModel(SessionDate.name)
    private sessionDateModel: Model<SessionDateDocument>,
  ) {}

  async create(
    createdSessionDateDto: CreatedSessionDateDto,
  ): Promise<SessionDate> {
    const createdSessionDate = new this.sessionDateModel(createdSessionDateDto);
    return createdSessionDate.save();
  }
  async update(
    id: string,
    updateSessionDateDto: UpdateSessionDateDto,
  ): Promise</*UpdateResult*/ any> {
    return this.sessionDateModel.updateOne({ _id: id }, updateSessionDateDto);
  }

  async findAll(): Promise<SessionDate[]> {
    return this.sessionDateModel.find().exec();
  }
  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.sessionDateModel.deleteOne({ _id: id });
  }
}
