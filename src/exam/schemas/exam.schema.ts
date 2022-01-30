import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Subject } from 'src/subject/schemas/subject.schema';
import ExamTest from 'src/exam-test/exam-test.interface';

export type ExamDocument = Exam & Document;

@Schema()
export class Exam {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  type: string;

  @Prop({ required: true, type: String })
  subject: Subject;

  @Prop(String)
  examTests?: ExamTest[];
}

export const ExamSchema = SchemaFactory.createForClass(Exam);
