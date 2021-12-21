import { Controller, Get } from '@nestjs/common';

@Controller()
export class AuthController {
  @Get()
  async authHome() {
    return 'Welcome to auth module';
  }
}
