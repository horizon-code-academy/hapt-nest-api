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
import { CreatedSessionDto } from './dto/created-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { SessionService } from './session.service';
import { Session } from './schemas/session.schema';

@Controller('session')
export class SessionController {
  constructor(private readonly SessionService: SessionService) { }

  @Get()
  findAll() {
    return this.SessionService.findAll();
  }

  @Post()
  create(@Body() createSessionDto: CreatedSessionDto): Promise<Session> {
    return this.SessionService.create(createSessionDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSessionDto: UpdateSessionDto,
  ): Promise<Session> {
    return this.SessionService.update(id, updateSessionDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.SessionService.delete(id);
  }
}
