const User = require('../models').User;

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
