import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import Exam from 'src/exam/exam.interface';
import SessionDate from 'src/session-date/session-date.interface';
import User from 'src/user/user.interface';

export type ExamTestDocument = ExamTest & Document;

@Schema()
export class ExamTest {
  @Prop({ required: true, type: String })
  exam: Exam;

  @Prop({ required: true, type: String })
  sessionDate: SessionDate;

  @Prop(Number)
  score?: number;

  @Prop(String)
  note?: string;

  @Prop({ required: true, type: String })
  student: User;
}

export const ExamTestSchema = SchemaFactory.createForClass(ExamTest);
