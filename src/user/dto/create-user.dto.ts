import { IsDate, IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  password: string;
  @IsPhoneNumber('TN')
  phone: string;
  firstName: string;
  lastName: string;
  @IsDate()
  @IsOptional()
  birthDay?: Date;
  @IsOptional()
  address?: string;
  @IsOptional()
  avatar?: string;
}
