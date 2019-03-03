import bcrypt from 'bcryptjs';

const User = require('../models').User;
const Meal = require('../models').Meal;

exports.create = (req, res) => {
  const {
 firstName, lastName, email, password, role } = req.body;
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
      .then(user => res.send({
        status: 200,
        data: user,
      }))
      .catch(error => res.send(error));
  });
};
