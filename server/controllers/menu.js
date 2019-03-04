import Model from '../models';

const { Menu } = Model;

exports.create = ('/', (req, res) => {
  if (!req.body.name || !req.body.price) {
    res.send({
      status: 400,
      error: 'Meal needs to have a name and price',
    });
  }
  Menu.create({
    name: req.body.name,
    price: req.body.price,
    meals: req.body.meals,
    catererId: req.body.caterer,
  })
    .then(menu => res.send({
      status: 201,
      data: menu,
    }))
    .catch(() => res.send({ status: 400, error: 'Could not create menu' }));
});

exports.list = ('/',
(req, res) => {
  Menu.findAll({})
    .then(menu => res.send({
      status: 200,
      data: menu,
    }))
    .catch(error => res.send({ status: 400, error }));
});
