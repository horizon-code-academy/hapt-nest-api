import { HttpException, Injectable } from '@nestjs/common';
import { sessionDateList } from '../../test/fake/session-date.fake';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SessionDate,
  SessionDateDocument,
} from './schemas/session-date.schema';

@Injectable()
export class SessionDateService {
  constructor(
    @InjectModel(SessionDate.name)
    private userModel: Model<SessionDateDocument>,
  ) {}

  getSessionDate(id: string): SessionDate {
    // badltha khater fy sessiondocument me themsh ``id
    const result = sessionDateList.find((u) => u.note === id);
    if (result) return result;
    else throw new HttpException('Not found', 404);
  }

  getSessionDates(sessionName: string, start_date: Date): SessionDate[] {
    console.log(sessionName, start_date);
    if (sessionName || start_date) {
      return sessionDateList.filter(
        (u) => u.session.name === sessionName || u.start_date === start_date,
      );
    } else return sessionDateList;
  }

  createSessionDate(sessionDate: Partial<SessionDate>): SessionDate {
    return sessionDate as SessionDate;
  }

  updateSessionDate(sessionDate: Partial<SessionDate>): SessionDate {
    return sessionDate as SessionDate;
  }

  deleteSessionDate(id: string): void {
    console.log('DELETED ' + id);
  }
}
