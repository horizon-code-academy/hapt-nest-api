import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { Session } from '../session/schemas/session.schema';
import { UpdateSessionDto } from '../session/dto/update-session.dto';
import { CreatedSessionDto } from './dto/created-session.dto';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get()
  findAll() {
    return this.sessionService.findAll();
  }

  @Post()
  create(@Body() createSessionDto: CreatedSessionDto): Promise<Session> {
    return this.sessionService.create(createSessionDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSessionDto: UpdateSessionDto,
  ): Promise<Session> {
    return this.sessionService.update(id, updateSessionDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.sessionService.delete(id);
  }
}
