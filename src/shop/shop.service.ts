import { Injectable } from '@nestjs/common';
import { shopDTO } from 'src/DTO/shopDTO';
import { PrismaService } from 'src/prisma/prismaService';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ShopService {
  constructor(private readonly prisma: PrismaService) {}

  async createShop(shopData: shopDTO) {
    let user;

    console.log('Shop data chai kk xa vanda', shopData);
    console.log('Shopname chai k xa vanda:', shopData.ShopName);
    if (shopData.userId) {
      // Check if the user already exists
      user = await this.prisma.user.findUnique({
        where: { id: shopData.userId },
      });

      if (!user) {
        throw new Error('User not found');
      }
    } else {
      // Create a new user if no userId is provided

      const hashPassword = bcrypt.hash(shopData.password);
      user = await this.prisma.user.create({
        data: {
          userName: shopData.userName,
          email: shopData.email,
          password: hashPassword,
        },
      });
    }

    await this.prisma.shops.create({
      data: {
        ShopName: shopData.ShopName,
        userID: user.id,
      },
    });

    return 'Shop Registered!';
  }

  async getShop() {
    return await this.prisma.shops.findMany();
  }
}
