import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../models/user';

const JwtOptions = {
    JwtFromRequest: ExtractJwt.fromHeader('authorization'),
    key: process.env.secret
};

const JwtLogin = new Strategy(JwtOptions, (payload, done) => {
  //see if user id in the payload exists in the database
  User.findById(payload.sub)
    .then((user) => {
      if (user) {
        //if it does call done with that user
        done(null, user);
      } else {
        //otherwise call done without a user object

        done(null, false);
      }
    })
    .catch((error) => done(null, error));
});

passport.use(JwtLogin)
