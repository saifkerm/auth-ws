import { Injectable } from '@nestjs/common';

@Injectable()
export class TwitterService {
  login(req) {
    if (!req.user) {
      return 'no user from twitter';
    } else {
      return {
        message: 'User info from twitter',
        user: req.user,
      };
    }
  }
}
