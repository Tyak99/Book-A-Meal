"use strict";

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meal = _models.default.Meal;

exports.create = function (req, res) {
  if (!req.body.name || !req.body.price) {
    return res.send({
      status: 400,
      error: 'Meal needs to have name and price'
    });
  }

  Meal.create({
    name: req.body.name,
    price: req.body.price,
    catererId: req.body.caterer
  }).then(function (meal) {
    return res.send({
      status: 201,
      data: meal
    });
  }).catch(function (err) {
    return res.send(err);
  });
};

exports.list = function (req, res) {
  Meal.findAll({
    where: {
      catererId: req.params.id
    }
  }).then(function (meal) {
    return res.send({
      status: 200,
      data: meal
    });
  }).catch(function (err) {
    return res.send(err);
  });
};

exports.editMeal = function (req, res) {
  Meal.findById(req.params.id).then(function (meal) {
    if (!meal) {
      return res.send({
        status: 400,
        error: 'No meal found'
      });
    }

    return meal.update({
      price: req.body.price || meal.price,
      name: req.body.name || meal.name
    }).then(function () {
      return res.send({
        status: 200,
        data: meal
      });
    }).catch(function (error) {
      return res.send(error);
    });
  });
};

exports.delete = function (req, res) {
  Meal.findById(req.params.id).then(function (meal) {
    if (!meal) {
      return res.send({
        status: 400,
        error: 'No meal found'
      });
    }

    return meal.destroy().then(function () {
      return res.send({
        status: 204,
        data: 'Meal deleted successfully'
      });
    }).catch(function (error) {
      return res.send({
        status: 400,
        error: error
      });
    });
  });
};
//# sourceMappingURL=meal.js.map