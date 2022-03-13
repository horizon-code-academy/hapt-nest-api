import { Module } from '@nestjs/common';
import { SessionDateController } from './session-date.controller';
import { SessionDateService } from './session-date.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionDateSchema } from './schemas/session-date.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SessionDate', schema: SessionDateSchema },
    ]),
  ],
  controllers: [SessionDateController],
  providers: [SessionDateService],
})
export class SessionDateModule {}
