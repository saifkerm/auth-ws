import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleService {
   login(req) {
       if (!req.user) {
         return 'no user from google';
       } else {
         return {
           message: 'User info from google',
           user: req.user,
         };
       }
    }
}
