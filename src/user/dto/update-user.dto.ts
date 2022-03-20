import {
  IsMongoId,
  IsArray,
  IsDate,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  Length,
} from 'class-validator';

export default class UpdateUserDto {
  @IsMongoId()
  _id?: string;
  @IsEmail()
  @IsOptional()
  email?: string;
  @IsOptional()
  password?: string;
  @IsPhoneNumber('TN')
  @IsOptional()
  phone?: string;
  @Length(2, 25)
  @IsOptional()
  firstName?: string;
  @Length(2, 25)
  @IsOptional()
  lastName?: string;
  @IsDate()
  @IsOptional()
  birthDay?: Date;
  @IsOptional()
  address?: string;
  @IsOptional()
  avatar?: string;
  @IsArray()
  @IsOptional()
  roles?: string[];
}
