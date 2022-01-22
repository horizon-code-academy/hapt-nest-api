import { Module } from '@nestjs/common';
import { SessionDateController } from './session-date.controller';
import { SessionDateService } from './session-date.service';

@Module({
  controllers: [SessionDateController],
  providers: [SessionDateService]
})
export class SessionDateModule {}
