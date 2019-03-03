import Model from '../models';

const { Menu } = Model;

exports.test = ('/',
(req, res) => {
  res.send('controllll');
});

exports.create = ('/',
(req, res) => {
  Menu.create({
    name: req.body.name,
    price: req.body.price,
    meals: req.body.meals,
    catererId: req.body.caterer,
  })
    .then((menu) =>
      res.send({
        status: 201,
        data: menu,
      })
    )
    .catch((error) =>
      res.send({ status: 400, error: 'Could not create menu' })
    );
});
