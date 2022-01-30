import { Model } from 'mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { userList } from '../../test/fake/user.fake';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

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
