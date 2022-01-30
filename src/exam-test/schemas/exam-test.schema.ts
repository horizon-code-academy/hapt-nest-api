import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import SessionDate from '../../session-date/session-date.interface';
import { Exam, ExamDocument } from '../../exam/scheams/exam.schema';
import { User, UserDocument } from '../../user/schemas/user.schema';

export type ExamTestDocument = ExamTest & Document;

@Schema()
export class ExamTest {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: Exam.name,
  })
  exam: ExamDocument;
  sessionDate: SessionDate;
  @Prop({ required: true, type: Number })
  score: number;
  @Prop({ required: true, type: String })
  note: string;
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  student: UserDocument;
}

export const ExamTestSchema = SchemaFactory.createForClass(ExamTest);
