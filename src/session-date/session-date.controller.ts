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

@Controller('session-date')
export class SessionDateController {
  constructor(private readonly SessionDateService: SessionDateService) {}
}
