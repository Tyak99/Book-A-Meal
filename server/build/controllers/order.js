"use strict";

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Order = _models.default.Order;

exports.create = function (req, res) {
  if (!req.body.price || !req.body.meals || !req.body.delivery_address) {
    return res.send({
      status: 400,
      error: 'Order data is not complete'
    });
  }

  Order.create({
    price: req.body.price,
    order_status: req.body.order_status,
    delivery_address: req.body.delivery_address,
    meals: req.body.meals,
    userId: req.body.userId,
    catererId: req.body.catererId
  }).then(function (order) {
    return res.send({
      status: 201,
      data: order
    });
  }).catch(function (error) {
    return res.send(error);
  });
};

exports.editOrder = function (req, res) {
  Order.findById(req.params.id).then(function (order) {
    if (!order) {
      return res.send({
        status: 400,
        error: 'No order with that id found'
      });
    }

    return order.update({
      price: req.body.price,
      order_status: req.body.order_status || order.status,
      delivery_address: req.body.delivery_address || order.delivery_address,
      meals: req.body.meals || order.meals
    }).then(function () {
      return res.send({
        status: 204,
        data: order
      });
    }).catch(function (error) {
      return res.send({
        status: 400,
        error: error
      });
    });
  });
};

exports.allOrders = function (req, res) {
  Order.findAll({
    where: {
      catererId: req.params.id
    }
  }).then(function (orders) {
    return res.send({
      status: 200,
      data: orders
    });
  }).catch(function (error) {
    return res.send({
      status: 400,
      error: error
    });
  });
};
//# sourceMappingURL=order.js.map