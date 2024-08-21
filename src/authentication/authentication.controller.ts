import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UserDTO } from 'src/DTO/userDTO';
import { LoginDTO } from 'src/DTO/loginDTO';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authservice: AuthenticationService) {}

  @Post('register')
  registerUser(@Body() dto: UserDTO) {
    return this.authservice.registerUser(dto);
  }

  @Post('login')
  loginUser(@Body() data: LoginDTO) {
    return this.authservice.loginUser(data);
  }
}
