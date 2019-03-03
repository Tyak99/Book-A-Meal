import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import Model from '../models';

const { User } = Model;

const tokenFunction = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.secret);
};

exports.create = (req, res) => {
  const {
    firstName, lastName, email, password, role,
  } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (user) {
      return res.send({
        status: 400,
        error: 'User with email already exist',
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return User.create({
      firstName,
      lastName,
      email,
      password: hash,
      roleId: role,
    })
      .then(() => {
        const token = tokenFunction(user);
        res.send({
          token,
        });
      })
      .catch(error => res.send(error));
  });
};

exports.login = (req, res) => {
  // User is already verified before they get here
  // so here i need to give the user token
  res.send({
    name: req.user.firstName,
    token: tokenFunction(req.user),
  });
};
