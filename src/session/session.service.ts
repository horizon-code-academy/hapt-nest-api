import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Session, SessionDocument } from './schemas/session.schema';
import { CreatedSessionDto } from './dto/created-session.dto';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session.name) private userModel: Model<SessionDocument>,
  ) {}

  async create(createSessionDto: CreatedSessionDto): Promise<Session> {
    const createdSession = new this.userModel(createSessionDto);
    return createdSession.save();
  }

  async findAll(): Promise<Session[]> {
    return this.userModel.find().exec();
  }
}
