import { Body, Controller, Get, Post } from '@nestjs/common';
import { ShopService } from './shop.service';
import { shopDTO } from 'src/DTO/shopDTO';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post('/registershop')
  createShop(@Body() shopData: shopDTO) {
    this.shopService.createShop(shopData);
  }

  @Get('getshop')
  async getShop() {
    return await this.shopService.getShop();
  }
}
