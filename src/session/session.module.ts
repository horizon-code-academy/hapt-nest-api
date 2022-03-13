import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionSchema } from './schemas/session.schema';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Session', schema: SessionSchema }]),
  ],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
