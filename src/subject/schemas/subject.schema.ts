import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
  @Prop({ required: true, type: String })
  label: string;

  @Prop({ required: true, type: String })
  field: string;

  @Prop({ required: true, type: Number })
  nb_hour: number;

  @Prop({ required: true, type: Number })
  price_hour: number;

  @Prop(String)
  description?: string;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
