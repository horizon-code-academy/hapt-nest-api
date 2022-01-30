import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { SubjectSchema } from './schemas/subject.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Subject', schema: SubjectSchema }]),
  ],
  providers: [SubjectService],
  controllers: [SubjectController],
})
export class SubjectModule {}
