"use strict";

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jwtSimple = _interopRequireDefault(require("jwt-simple"));

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models.default.User;

var tokenFunction = function tokenFunction(user) {
  var timestamp = new Date().getTime();
  return _jwtSimple.default.encode({
    sub: user.dataValues.id,
    iat: timestamp
  }, process.env.secret);
};

exports.create = function (req, res) {
  var _req$body = req.body,
      firstName = _req$body.firstName,
      lastName = _req$body.lastName,
      email = _req$body.email,
      password = _req$body.password,
      role = _req$body.role;
  User.findOne({
    where: {
      email: email
    }
  }).then(function (user) {
    if (user) {
      return res.send({
        status: 400,
        error: 'User with email already exist'
      });
    }

    var salt = _bcryptjs.default.genSaltSync(10);

    var hash = _bcryptjs.default.hashSync(password, salt);

    User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hash,
      roleId: role
    }).then(function (user) {
      var token = tokenFunction(user);
      res.send({
        token: token
      });
    }).catch(function (error) {
      return res.send(error);
    });
  });
};

exports.login = function (req, res) {
  // User is already verified before they get here
  // so here i need to give the user token
  res.send({
    name: req.user.firstName,
    token: tokenFunction(req.user)
  });
};
//# sourceMappingURL=authController.js.map