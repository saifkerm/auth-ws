import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { FacebookService } from './facebook.service';
import { AuthGuard } from '@nestjs/passport';
import {
  FACEBOOK_CALLBACK_URI,
  FACEBOOK_GUARD_NAME,
} from '../../config/config.env';

@Controller()
export class FacebookController {
  constructor(private readonly facebookService: FacebookService) {}

  @Get('facebook')
  @UseGuards(AuthGuard(FACEBOOK_GUARD_NAME))
  async facebookAuth(): Promise<HttpStatus> {
    return HttpStatus.OK;
  }

  @Get(FACEBOOK_CALLBACK_URI)
  @UseGuards(AuthGuard(FACEBOOK_GUARD_NAME))
  facebookAuthRedirect(@Req() req) {
    return this.facebookService.login(req);
  }
}
