import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { PrismaService } from 'src/prisma/prismaService';
import { prismaModule } from 'src/prisma/prismaModule';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    prismaModule,
    JwtModule.register({
      secret: 'A2453DYSI',
      signOptions: { expiresIn: '30m' },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
