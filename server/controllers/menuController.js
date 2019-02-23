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
  const menu = menuServices.get(req.params.id);
  if (!menu) {
    return res.send({
      status: 400,
      data: {
        message: 'Sorry, no menu with that id found',
      },
    });
  }
  return res.send({
    status: 200,
    data: menu,
  });
};

exports.postMenu = (req, res) => {
  const { name, price, meals } = req.body;
  if (!name || !price || !meals) {
    return res.send({
      status: 400,
      data: {
        message: 'Sorry, all fields must be present',
      },
    });
  }
  const newMenu = {
    name,
    price,
    meals,
  };
  const setMenu = menuServices.addMeal(newMenu);
  return res.send({
    status: 201,
    data: setMenu,
  });
};
