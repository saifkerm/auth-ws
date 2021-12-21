import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';
import {
  APP_PREFIX,
  BACK_URI,
  FACEBOOK_CALLBACK_URI,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  START_PORT,
} from '../../config/config.env';

const STRATEGY_NAME = 'facebook';

@Injectable()
export class FacebookStrategy extends PassportStrategy(
  Strategy,
  STRATEGY_NAME,
) {
  constructor() {
    const callbackURL = `${BACK_URI}:${START_PORT}/${APP_PREFIX}/${FACEBOOK_CALLBACK_URI}`;
    const options = {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL,
      scope: 'email',
      profileFields: ['emails', 'name'],
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
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
    };
    const payload = {
      user,
      accessToken,
    };

    done(null, payload);
  }
}
