import MenuService from '../services/MenuServices';

const menuServices = new MenuService();

exports.getMenu = (req, res) => {
  const menus = menuServices.getAll();
  res.status(200).send({
    status: 'success',
    data: menus,
  });
};

exports.getOneMenu = (req, res) => {
  const menu = menuServices.get();
  if (!menu) {
    res.status(404).send({
      status: 'error',
      message: 'menu not found',
    });
  }
  res.status(200).send({
    status: 'success',
    data: menu,
  });
};

exports.postMenu = (req, res) => {
  if (!req.body.name || !req.body.price || !req.body.meals) {
    res.send({
      status: 'error',
      message: 'all fields must be present',
    });
  }
  const newMenu = {
    name: req.body.name,
    price: req.body.price,
    meals: req.body.meals,
  };
  menuServices.addMeal(newMenu);
  res.status(201).send({
    message: 'menu posted successfully',
    data: newMenu,
  });
};
