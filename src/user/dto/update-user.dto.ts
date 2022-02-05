import { IsDate, IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;
  @IsOptional()
  password?: string;
  @IsPhoneNumber('TN')
  @IsOptional()
  phone?: string;
  @IsOptional()
  firstName?: string;
  @IsOptional()
  lastName?: string;
  @IsDate()
  @IsOptional()
  birthDay?: Date;
  @IsOptional()
  address?: string;
  @IsOptional()
  avatar?: string;
  @IsOptional()
  roles?: string[];
}
