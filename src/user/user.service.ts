import { Injectable } from '@nestjs/common';
import User from './user.interface';
import { user } from '../../test/fake/user.fake';

@Injectable()
export class UserService {
  getUser(): User {
    return user;
  }
}
