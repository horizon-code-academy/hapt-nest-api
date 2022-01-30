import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Subject, SubjectDocument } from '../../subject/schemas/subject.schema';

export type ExamDocument = Exam & Document;

@Schema()
export class Exam {
  @Prop({ required: true, type: String })
  name: string;
  @Prop({ required: true, type: String })
  type: string;
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: Subject.name,
  })
  subject: SubjectDocument;
  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId }],
    ref: Subject.name,
  })
  examTests?: ExamDocument[];
}

export const ExamSchema = SchemaFactory.createForClass(Exam);
