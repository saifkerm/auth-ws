import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google/google.strategy';
import { GoogleController } from './google/google.controller';
import { TwitterController } from './twitter/twitter.controller';
import { TwitterStrategy } from './twitter/twitter.strategy';
import { GoogleService } from './google/google.service';
import { TwitterService } from './twitter/twitter.service';
import { FacebookService } from './facebook/facebook.service';
import { FacebookController } from './facebook/facebook.controller';
import { FacebookStrategy } from './facebook/facebook.strategy';

@Module({
  imports: [PassportModule],
  providers: [
    GoogleService,
    TwitterService,
    FacebookService,
    GoogleStrategy,
    TwitterStrategy,
    FacebookStrategy,
  ],
  controllers: [
    AuthController,
    GoogleController,
    TwitterController,
    FacebookController,
  ],
})
export class AuthModule {}
