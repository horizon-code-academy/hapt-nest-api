import { Controller, Get } from '@nestjs/common';
import { SessionService } from './session.service';
import Session from './session.interface';

@Controller('session')
export class SessionController {
  constructor(private readonly SessionService: SessionService) {}
  @Get()
  getSession(): Session {
    return this.SessionService.getSession();
  }
}
