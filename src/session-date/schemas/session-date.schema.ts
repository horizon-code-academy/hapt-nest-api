import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/schemas/user.schema';
import Session from 'src/session/session.interface';

export type SessionDateDocument = SessionDate & Document;

@Schema()
export class SessionDate {
  @Prop({ required: true, type: Date })
  start_date: Date;

  @Prop({ required: true, type: Date })
  end_date: Date;

  @Prop({ required: true, type: String })
  session: Session;

  @Prop({ required: true, type: [String] })
  attendees: User[];

  @Prop({ required: true, type: String })
  teacher: User;

  @Prop(String)
  note?: string;
}

export const SessionDateSchema = SchemaFactory.createForClass(SessionDate);
