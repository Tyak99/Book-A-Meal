import Model from '../models';

const { Order } = Model;

exports.create = (req, res) => {
  Order.create({
    price: req.body.price,
    order_status: req.body.order_status,
    delivery_address: req.body.delivery_address,
    meals: req.body.meals,
    userId: req.body.userId,
    catererId: req.body.catererId,
  })
    .then(order => res.send(order))
    .catch(error => res.send(error));
};

exports.editOrder = (req, res) => {
  Order.findById(req.params.id).then((order) => {
    if (!order) {
      return res.send({
        status: 400,
        error: 'No order with that id found',
      });
    }
    return order.update({
      price: req.body.price,
      order_status: req.body.order_status || order.status,
      delivery_address: req.body.delivery_address || order.delivery_address,
      meals: req.body.meals || order.meals,
    })
      .then(() => res.send({
        status: 204,
        data: order,
      }))
      .catch(error => res.send({
        status: 400,
        error,
      }));
  });
};
