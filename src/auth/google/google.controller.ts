import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  GOOGLE_CALLBACK_URI,
  GOOGLE_GUARD_NAME,
} from '../../config/config.env';
import { GoogleService } from './google.service';

@Controller()
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get('google')
  @UseGuards(AuthGuard(GOOGLE_GUARD_NAME))
  async googleAuth(): Promise<void> {
    return null;
  }

  @Get(GOOGLE_CALLBACK_URI)
  @UseGuards(AuthGuard(GOOGLE_GUARD_NAME))
  googleAuthRedirect(@Req() req) {
    return this.googleService.login(req);
  }
}
