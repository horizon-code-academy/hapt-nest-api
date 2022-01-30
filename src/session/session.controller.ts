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
import { SessionService } from './session.service';
import { Session } from './schemas/session.schema';

@Controller('session')
export class SessionController {
  constructor(private readonly SessionService: SessionService) {}

  @Get()
  getSessions(
    @Query('name') name: string,
    @Query('start_date') start_date: Date,
  ): Session[] {
    return this.SessionService.getSessions(name, start_date);
  }

  @Get(':id')
  getSession(@Param('id') id: string): Session {
    return this.SessionService.getSession(id);
  }

  @Post()
  createSession(@Body() session: Partial<Session>): Session {
    return this.SessionService.createSession(session);
  }

  @Put()
  updateSession(@Body() session: Partial<Session>): Session {
    return this.SessionService.updateSession(session);
  }

  @Delete(':id')
  deleteSession(@Param('id') id: string): void {
    return this.SessionService.deleteSession(id);
  }
}
