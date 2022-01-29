import { HttpException, Injectable } from '@nestjs/common';
import Session from './session.interface';
import { sessionList } from '../../test/fake/session.fake';

@Injectable()
export class SessionService {
  getSession(id: string): Session {
    const result = sessionList.find((u) => u._id === id);
    if (result) return result;
    else throw new HttpException('Not found', 404);
  }

  getSessions(name: string, start_date: Date): Session[] {
    if (name || start_date)
      return sessionList.filter(
        (u) => u.name === name || u.start_date === start_date,
      );
    else return sessionList;
  }

  createSession(session: Partial<Session>): Session {
    return session as Session;
  }

  updateSession(session: Partial<Session>): Session {
    return session as Session;
  }

  deleteSession(id: string): void {
    console.log('DELETED ' + id);
  }
}
