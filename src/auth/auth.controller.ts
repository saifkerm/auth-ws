import { Controller, Get, Req } from '@nestjs/common';

@Controller()
export class AuthController  {
  constructor() {}

  @Get()
  async authHome(@Req() req) {
    return "Welcome to auth module"
  }
}
