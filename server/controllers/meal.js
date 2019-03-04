import Model from '../models';

const { Meal } = Model;

exports.create = (req, res) => {
  if (!req.body.name || !req.body.price) {
    return res.send({
      status: 400,
      error: 'Meal needs to have name and price',
    });
  }
  Meal.create({
    name: req.body.name,
    price: req.body.price,
    catererId: req.body.caterer,
  })
    .then(meal => res.send({
      status: 201,
      data: meal,
    }))
    .catch(err => res.send(err));
};

exports.list = (req, res) => {
  Meal.findAll({
    where: {
      catererId: req.params.id,
    },
  })
    .then(meal => res.send({
      status: 200,
      data: meal,
    }))
    .catch(err => res.send(err));
};

exports.editMeal = (req, res) => {
  Meal.findById(req.params.id).then((meal) => {
    if (!meal) {
      return res.send({
        status: 400,
        error: 'No meal found',
      });
    }
    return meal
      .update({
        price: req.body.price || meal.price,
        name: req.body.name || meal.name,
      })
      .then(() => res.send({
        status: 200,
        data: meal,
      }))
      .catch(error => res.send(error));
  });
};

exports.delete = (req, res) => {
  Meal.findById(req.params.id).then((meal) => {
    if (!meal) {
      return res.send({
        status: 400,
        error: 'No meal found',
      });
    }
    return meal
      .destroy()
      .then(() => res.send({
        status: 204,
        data: 'Meal deleted successfully',
      }))
      .catch(error => res.send({
        status: 400,
        error,
      }));
  });
};
