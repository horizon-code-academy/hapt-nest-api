export class UpdateUserDto {
  email?: string;
  password?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  birthDay?: Date;
  address?: string;
  avatar?: string;
  roles?: string[];
}
