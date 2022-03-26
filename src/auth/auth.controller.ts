import {
  Controller,
  Request,
  Get,
  Post,
  UseGuards,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import CreateUserDto from 'src/user/dto/create-user.dto';
import User from 'src/user/user.interface';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { CurrentUserInterceptor } from './user.interceptor';

@Controller('auth')
@UseInterceptors(CurrentUserInterceptor)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('me')
  async me(@Request() req): Promise<User | undefined> {
    console.log(req.user);
    return this.authService.getMe(req.user);
  }

  @Post('register')
  async register(@Body() newUser: CreateUserDto): Promise<User> {
    return this.authService.register(newUser);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
