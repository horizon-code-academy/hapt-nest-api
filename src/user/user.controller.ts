import { Controller, Get } from '@nestjs/common';
import User from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUser(): User {
    return this.userService.getUser();
  }
}
