import { Injectable, HttpException } from '@nestjs/common';
import User from './user.interface';
import { userList } from '../../test/fake/user.fake';

@Injectable()
export class UserService {
  getUser(id: string): User {
    const result = userList.find((u) => u._id === id);
    if (result) return result;
    else throw new HttpException('Not found', 404);
  }
  getUsers(name: string, phone: string, role: string): User[] {
    if (name || phone || role)
      return userList.filter(
        (u) =>
          u.phone === phone ||
          (u.firstName + ' ' + u.lastName).includes(name) ||
          u.roles.includes(role),
      );
    else return userList;
  }
  createUser(user: Partial<User>): User {
    return user as User;
  }
  updateUser(user: Partial<User>): User {
    return user as User;
  }
  deleteUser(id: string): void {
    console.log('DELETED ' + id);
  }
}
