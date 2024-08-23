import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prismaService';
import { UserDTO } from 'src/DTO/userDTO';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from 'src/DTO/loginDTO';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async registerUser(dto: UserDTO) {
    try {
      const hashedPassword = await bcrypt.hash(dto.password, 10);
      await this.prisma.user.create({
        data: {
          userName: dto.userName,
          email: dto.email,
          password: hashedPassword,
        },
      });
      console.log('User registered succesfully');
      return 'User registered succesfully';
    } catch (error) {
      return error;
    }
  }

  async loginUser(data: LoginDTO) {
    const { email, password } = data;
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return 'Invalid email or password!';
      }

      const validPassword = bcrypt.compare(password, user.password);

      if (!validPassword) {
        return 'Invalid email or password';
      }

      const token = this.jwtService.sign({
        email: user.email,
        userId: user.id,
      });

      return { accessToken: token };
    } catch (error) {
      return error;
    }
  }
}
