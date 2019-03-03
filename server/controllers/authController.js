import bcrypt from 'bcryptjs';

const User = require('../models').User;
const Meal = require('../models').Meal;

exports.create = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        return res.send({
          status: 400,
          error: 'User with this email exists',
        });
      }
      return bcrypt.hash(req.body.password, 12);
    })
    .then((hashedPassword) => {
      User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        roleId: req.body.role,
      })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(300).send(error));
    });
};

exports.list = (req, res) => {
  User.findById(3, {
    include: [
      {
        model: Meal,
        as: 'meals',
      },
    ],
  })
    .then(user => res.send(user.meals))
    .catch(err => res.send(err));
};
