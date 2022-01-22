import { Injectable } from '@nestjs/common';
import Session from './session.interface';
import { session } from '../../test/fake/session.fake';

@Injectable()
export class SessionService {
  getSession(): Session {
    return session;
  }
}
