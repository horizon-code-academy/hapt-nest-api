import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Session, SessionDocument } from './schemas/session.schema';
import { CreatedSessionDto } from './dto/created-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session.name) private sessionModel: Model<SessionDocument>,
  ) {}

  async create(createSessionDto: CreatedSessionDto): Promise<Session> {
    const createdSession = new this.sessionModel(createSessionDto);
    return createdSession.save();
  }
  async update(
    id: string,
    updateSessionDto: UpdateSessionDto,
  ): Promise</*UpdateResult*/ any> {
    return this.sessionModel.updateOne({ _id: id }, updateSessionDto);
  }

  async findAll(): Promise<Session[]> {
    return this.sessionModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.sessionModel.deleteOne({ _id: id });
  }
}
