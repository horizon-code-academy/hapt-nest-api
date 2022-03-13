import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, type: String })
  email: string;

  @Prop({ required: true, type: String })
  password: string;

  @Prop({ required: true, type: String })
  phone: string;

  @Prop({ required: true, type: [String] })
  roles: string[];

  @Prop({ required: true, type: String })
  firstName: string;

  @Prop({ required: true, type: String })
  lastName: string;

  @Prop(Date)
  birthDay?: Date;

  @Prop(String)
  address?: string;

  @Prop(String)
  avatar?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
