import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {TWITTER_CALLBACK_URI, TWITTER_GUARD_NAME} from '../../config/config.env';
import { TwitterService } from './twitter.service';

@Controller()
export class TwitterController {
  constructor(private readonly twitterService: TwitterService) {}

  @Get('twitter')
  @UseGuards(AuthGuard(TWITTER_GUARD_NAME))
  async twitterAuth(@Req() req) {}

  @Get(TWITTER_CALLBACK_URI)
  @UseGuards(AuthGuard(TWITTER_GUARD_NAME))
  twitterAuthRedirect(@Req() req) {
    return this.twitterService.login(req);
  }
}
