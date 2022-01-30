import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Session, SessionDocument } from '../../session/schemas/session.schema';
import { User } from '../../user/schemas/user.schema';

export type SessionDateDocument = SessionDate & Document;

@Schema()
export class SessionDate {
  @Prop({ type: Date, default: Date.now })
  start_date: Date;

  @Prop({ type: Date })
  end_date: Date;

  @Prop({
    required: true,
    type: Types.ObjectId,
    ref: Session.name,
  })
  session: SessionDocument;

  @Prop({
    required: true,
    type: [{ type: Types.ObjectId, ref: User.name }],
  })
  attendees: User[];

  @Prop({
    required: true,
    type: { required: true, type: Types.ObjectId, ref: User.name },
  })
  teacher: User;

  @Prop({ type: String })
  note: string;
}

export const SessionDateSchema = SchemaFactory.createForClass(SessionDate);
