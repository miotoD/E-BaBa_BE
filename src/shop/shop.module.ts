import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';
import { prismaModule } from 'src/prisma/prismaModule';
import { ShopService } from './shop.service';

@Module({
  imports: [prismaModule],

  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
