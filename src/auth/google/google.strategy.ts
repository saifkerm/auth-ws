import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import {
  APP_PREFIX,
  BACK_URI,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URI,
  START_PORT,
} from '../../config/config.env';

const STRATEGY_NAME = 'google';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, STRATEGY_NAME) {
  constructor() {
    const callbackURL = `${BACK_URI}:${START_PORT}/${APP_PREFIX}/${GOOGLE_CALLBACK_URI}`;
    const scope = ['email', 'profile'];
    const options = {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL,
      scope,
    };
    super(options);
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstname: name.givenName,
      lastname: name.familyName,
      picture: photos[0].value,
    };
    const payload = {
      user,
      accessToken,
    };
    done(null, payload);
  }
}
