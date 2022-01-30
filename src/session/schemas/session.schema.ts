import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/schemas/user.schema';
import { Subject } from 'src/subject/schemas/subject.schema';

export type SessionDocument = Session & Document;

@Schema()
export class Session {
  @Prop({ required: true, type: String })
  label: string;

  @Prop({ required: true, type: Date })
  start_date: Date;

  @Prop({ required: true, type: Date })
  end_date: Date;

  @Prop({
    required: true,
    type: [{ type: Types.ObjectId, ref: 'User' }],
  })
  teacher: User[];

  @Prop({
    required: true,
    type: [{ type: Types.ObjectId, ref: 'User' }],
  })
  students: User[];

  @Prop({
    required: true,
    type: Types.ObjectId,
    ref: 'Subject',
  })
  subject: Subject;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
