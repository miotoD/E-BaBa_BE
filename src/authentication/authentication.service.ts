import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prismaService';
import { UserDTO } from 'src/DTO/userDTO';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from 'src/DTO/loginDTO';

@Injectable()
export class AuthenticationService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async registerUser(dto: UserDTO) {
    try {
      await this.prisma.user.create({
        data: {
          userName: dto.userName,
          email: dto.email,
          password: dto.password,
        },
      });
      console.log('User registered succesfully');
      return 'User registered succesfully';
    } catch (error) {
      return error;
    }
  }

  async loginUser(data: LoginDTO) {
    return 'Data recived succesfully. Logged In';
  }
}
