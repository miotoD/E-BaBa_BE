import { IsNumber, IsString } from 'class-validator';

export class productDTO {
  @IsString()
  productName;

  @IsNumber()
  price;

  @IsNumber()
  inStock;
}
