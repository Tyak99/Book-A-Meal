"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _passportJwt = require("passport-jwt");

var _passportLocal = _interopRequireDefault(require("passport-local"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var User = _models.default.User;
var LocalOption = {
  usernameField: 'email'
};
var localLogin = new _passportLocal.default(LocalOption, function (email, password, done) {
  User.findOne({
    where: {
      email: email
    }
  }).then(function (user) {
    if (!user) {
      done(null, false);
    } else {
      var hash = user.password;

      _bcryptjs.default.compare(password, hash, function (err, res) {
        // res === true
        if (res === false) {
          done(null, false);
        } else {
          done(null, user);
        }
      });
    }
  }).catch(function (error) {
    return done(null, error);
  });
});
var JwtOptions = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.secret
};
var JwtLogin = new _passportJwt.Strategy(JwtOptions, function (payload, done) {
  //see if user id in the payload exists in the database
  User.findById(payload.sub).then(function (user) {
    if (user) {
      //if it does call done with that user
      done(null, user);
    } else {
      //otherwise call done without a user object
      done(null, false);
    }
  }).catch(function (error) {
    return done(null, error);
  });
});

_passport.default.use(JwtLogin);

_passport.default.use(localLogin);
//# sourceMappingURL=passport.js.map