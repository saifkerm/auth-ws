require('dotenv').config();

export const START_PORT = process.env.START_PORT || 3001
export const BACK_URI = process.env.BACK_URI || '';
export const APP_PREFIX = process.env.APP_PREFIX || 'auth';

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
export const GOOGLE_CALLBACK_URI = process.env.GOOGLE_CALLBACK_URI || '';
export const GOOGLE_GUARD_NAME = process.env.GOOGLE_GUARD_NAME || '';

export const TWITTER_KEY = process.env.TWITTER_KEY || '';
export const TWITTER_SECRET = process.env.TWITTER_SECRET || '';
export const TWITTER_CALLBACK_URI = process.env.TWITTER_CALLBACK_URI || '';
export const TWITTER_GUARD_NAME = process.env.TWITTER_GUARD_NAME || '';

export const FACEBOOK_CALLBACK_URI = process.env.FACEBOOK_CALLBACK_URI || '';
export const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID || '';
export const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET || '';
export const FACEBOOK_GUARD_NAME = process.env.FACEBOOK_GUARD_NAME || '';




