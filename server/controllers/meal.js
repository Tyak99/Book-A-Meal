import Model from '../models';

const { Meal } = Model;

exports.test = (req, res) => {
  res.send('i say here');
};

exports.create = (req, res) => {
  Meal.create({
    name: req.body.name,
    price: req.body.price,
    catererId: req.body.caterer,
  })
    .then((meal) => res.status(201).send(meal))
    .catch((err) => res.send(err));
};

exports.list = (req, res) => {
  Meal.findAll({
    where: {
      catererId: 3,
    },
  })
    .then((meal) => res.send(meal))
    .catch((err) => res.send(err));
};
