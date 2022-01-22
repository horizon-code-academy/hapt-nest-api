import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import User from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(
    @Query('role') role: string,
    @Query('name') name: string,
    @Query('phone') phone: string,
  ): User[] {
    return this.userService.getUsers(name, phone, role);
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    return this.userService.getUser(id);
  }

  @Post()
  createUser(@Body() user: Partial<User>): User {
    return this.userService.createUser(user);
  }

  @Put()
  updateUser(@Body() user: Partial<User>): User {
    return this.userService.updateUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    return this.userService.deleteUser(id);
  }
}
