import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  usersDey(): string {
    return 'users diye';
  }
}
