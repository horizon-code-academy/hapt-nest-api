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
import { CreatedSessionDateDto } from './dto/created-session-date.dto';
import { UpdateSessionDateDto } from './dto/update-session-date.dto';
import { SessionDate } from './schemas/session-date.schema';

import { SessionDateService } from './session-date.service';

@Controller('session-date')
export class SessionDateController {
  constructor(private readonly SessionDateService: SessionDateService) { }
  @Get()
  findAll() {
    return this.SessionDateService.findAll();
  }

  @Post()
  create(@Body() createSessionDateDto: CreatedSessionDateDto): Promise<SessionDate> {
    return this.SessionDateService.create(createSessionDateDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSessionDateDto: UpdateSessionDateDto,
  ): Promise<SessionDate> {
    return this.SessionDateService.update(id, updateSessionDateDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.SessionDateService.delete(id);
  }
}
