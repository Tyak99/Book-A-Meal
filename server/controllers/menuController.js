import MenuService from '../services/MenuServices';

const menuServices = new MenuService();

exports.getMenu = (req, res) => {
  const menus = menuServices.getAll();
  res.send({
    status: 200,
    data: menus,
  });
};

exports.getOneMenu = (req, res) => {
  const menu = menuServices.get();
  if (!menu) {
    res.send({
      status: 400,
      data: {
        message: 'Sorry, no menu with that id found',
      },
    });
  }
  res.send({
    status: 200,
    data: menu,
  });
};

exports.postMenu = (req, res) => {
  const { name, price, meals } = req.body;
  if (!name || !price || !meals) {
    res.send({
      status: 400,
      message: 'Sorry, all fields must be present',
    });
  }
  const newMenu = {
    name,
    price,
    meals,
  };
  const setMenu = menuServices.addMeal(newMenu);
  res.send({
    status: 201,
    data: setMenu,
  });
};
