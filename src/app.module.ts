import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ShopService } from './shop/shop.service';
import { ShopModule } from './shop/shop.module';
import { prismaModule } from './prisma/prismaModule';

@Module({
  imports: [
    ProductModule,
    UsersModule,
    AuthenticationModule,
    ShopModule,
    prismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, ShopService],
})
export class AppModule {}
