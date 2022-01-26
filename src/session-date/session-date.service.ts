import { HttpException, Injectable } from '@nestjs/common';
import SessionDate from './session-date.interface';
import { sessionDateList } from '../../test/fake/session-date.fake';

@Injectable()
export class SessionDateService {
  getSessionDate(id: string): SessionDate {
    const result = sessionDateList.find((u) => u._id === id);
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
