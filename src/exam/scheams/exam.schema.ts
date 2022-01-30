import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Subject } from '../../subject/schemas/subject.schema';
import { ExamTest } from 'src/exam-test/schemas/exam-test.schema';

export type ExamDocument = Exam & Document;

@Schema()
export class Exam {
  @Prop({ required: true, type: String })
  label: string;

  @Prop({ required: true, type: String })
  type: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: ExamTest.name }],
  })
  examTests?: ExamTest[];

  @Prop({
    required: true,
    type: Types.ObjectId,
    ref: Subject.name,
  })
  subject: Subject;
}

export const ExamSchema = SchemaFactory.createForClass(Exam);
