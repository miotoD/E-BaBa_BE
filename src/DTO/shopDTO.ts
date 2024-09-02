import { IsNumber, IsOptional, IsString } from 'class-validator';

export class shopDTO {
  @IsString()
  ShopName: string;

  @IsString()
  userName: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  @IsOptional()
  userId?: number;

  @IsString()
  @IsOptional()
  shopImage?: string;
}
