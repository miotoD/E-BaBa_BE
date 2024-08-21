import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDTO {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
