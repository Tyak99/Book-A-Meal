"use strict";

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = _models.default.Menu;
exports.create = ('/', function (req, res) {
  if (!req.body.name || !req.body.price) {
    return res.send({
      status: 400,
      error: 'Meal needs to have a name and price'
    });
  }

  Menu.create({
    name: req.body.name,
    price: req.body.price,
    meals: req.body.meals,
    catererId: req.body.caterer
  }).then(function (menu) {
    return res.send({
      status: 201,
      data: menu
    });
  }).catch(function () {
    return res.send({
      status: 400,
      error: 'Could not create menu'
    });
  });
});
exports.list = ('/', function (req, res) {
  Menu.findAll({}).then(function (menu) {
    return res.send({
      status: 200,
      data: menu
    });
  }).catch(function (error) {
    return res.send({
      status: 400,
      error: error
    });
  });
});
//# sourceMappingURL=menu.js.map