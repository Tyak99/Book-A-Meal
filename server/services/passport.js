import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcryptjs';

import Model from '../models';

require('dotenv').config();

const { User } = Model;

const LocalOption = { usernameField: 'email' };

const localLogin = new LocalStrategy(LocalOption, (email, password, done) => {
  User.findOne({ where: { email } })
    .then((user) => {
      if (!user) {
        done(null, false);
      } else {
        const hash = user.password;
        bcrypt.compare(password, hash, (err, res) => {
          // res === true
          if (res === false) {
            done(null, false);
          } else {
            done(null, user);
          }
        });
      }
    })
    .catch((error) => done(null, error));
});

const JwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.secret,
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

passport.use(JwtLogin);
passport.use(localLogin);
