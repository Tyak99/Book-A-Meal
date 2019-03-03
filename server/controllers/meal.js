import Model from '../models';

const { Meal } = Model;

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

exports.editMeal = (req, res) => {
  Meal.findById(req.params.id).then((meal) => {
    if (!meal) {
      return res.send({
        status: 404,
        error: 'No meal found',
      });
    }
    return meal
      .update({
        price: req.body.price || meal.price,
        name: req.body.name || meal.name,
      })
      .then(() => res.send(meal))
      .catch((error) => res.send(error));
  });
};
