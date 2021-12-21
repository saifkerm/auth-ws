import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-twitter';
import {
  APP_PREFIX,
  BACK_URI,
  START_PORT,
  TWITTER_CALLBACK_URI,
  TWITTER_KEY,
  TWITTER_SECRET,
} from '../../config/config.env';

const STRATEGY_NAME = 'twitter';

export class TwitterStrategy extends PassportStrategy(
  Strategy,
  STRATEGY_NAME,
) {
    constructor() {
        const callbackURL = `${BACK_URI}:${START_PORT}/${APP_PREFIX}/${TWITTER_CALLBACK_URI}`;
        const options = {
            consumerKey: TWITTER_KEY,
            consumerSecret: TWITTER_SECRET,
            callbackURL
        };
        super(options);
    }

    async validate(token, tokenSecret, profile: any, done: VerifyCallback): Promise<any> {
        console.log(JSON.stringify(profile))
        done(null, profile);
    }
}
