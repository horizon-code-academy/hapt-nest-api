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
}
