import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exam } from '../../exam/scheams/exam.schema';
import { User } from '../../user/schemas/user.schema';
import { SessionDate } from '../../session-date/schemas/session-date.schema';

export type ExamTestDocument = ExamTest & Document;

@Schema()
export class ExamTest {
  @Prop({
    required: true,
    type: Types.ObjectId,
    ref: 'Exam',
  })
  exam: Exam;

  @Prop({
    required: true,
    type: Types.ObjectId,
    ref: 'SessionDate',
  })
  sessionDate: SessionDate;

  @Prop({ required: true, type: Number })
  score: number;

  @Prop({ required: true, type: String })
  note: string;

  @Prop({
    required: true,
    type: Types.ObjectId,
    ref: 'User',
  })
  student: User;
}

export const ExamTestSchema = SchemaFactory.createForClass(ExamTest);
