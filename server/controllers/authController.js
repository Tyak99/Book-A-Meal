const User = require('../models').User;
const Meal = require('../models').Meal;

exports.create = (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    roleId: req.body.role,
  })
    .then((user) => res.status(201).send(user))
    .catch((error) => res.status(300).send(error));
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
    .then((user) => res.send(user.meals))
    .catch((err) => res.send(err));
};
