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
    .then((order) => res.send(order))
    .catch((error) => res.send(error));
};
