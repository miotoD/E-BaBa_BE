import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productDekha(): string {
    return 'Product dekhaye!';
  }
}
