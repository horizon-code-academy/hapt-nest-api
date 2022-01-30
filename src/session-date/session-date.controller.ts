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

import { SessionDateService } from './session-date.service';
import { SessionDate } from './schemas/session-date.schema';

@Controller('session-date')
export class SessionDateController {
  constructor(private readonly SessionDateService: SessionDateService) {}

  @Get()
  getSessionDates(
    @Query('sessionName') sessionName: string,
    @Query('start_date') start_date: Date,
  ): SessionDate[] {
    return this.SessionDateService.getSessionDates(sessionName, start_date);
  }

  @Get(':id')
  getSessionDate(@Param('id') id: string): SessionDate {
    return this.SessionDateService.getSessionDate(id);
  }

  @Post()
  createSessionDate(@Body() sessionDate: Partial<SessionDate>): SessionDate {
    return this.SessionDateService.createSessionDate(sessionDate);
  }

  @Put()
  updateSessionDate(@Body() sessionDate: Partial<SessionDate>): SessionDate {
    return this.SessionDateService.updateSessionDate(sessionDate);
  }

  @Delete(':id')
  deleteSessionDate(@Param('id') id: string): void {
    return this.SessionDateService.deleteSessionDate(id);
  }
}
