import OrderService from '../services/OrderService';

const orderServices = new OrderService();

exports.getAllOrders = (req, res) => {
  const orders = orderServices.getAll();
  res.send({
    status: 200,
    data: orders,
  });
};

exports.postOrder = (req, res) => {
  if ((!req.body.meals, !req.body.price, !req.body.delivery_address)) {
    return res.send({
      status: 400,
      data: {
        message: 'Sorry, all fields must be filled',
      },
    });
  }
  const newOrder = {
    meals: req.body.meals,
    price: req.body.price,
    customer: req.body.customer,
    status: req.body.status,
    delivery_address: req.body.delivery_address,
  };
  const setOrder = orderServices.addOrder(newOrder);
  return res.send({
    status: 201,
    data: setOrder,
  });
};

exports.editOrder = (req, res) => {
  const order = orderServices.get(req.params.id);
  if (!order) {
    res.send({
      status: 400,
      data: {
        message: 'Sorry, order cannot be found',
      },
    });
  }
  const editedOrder = orderServices.editOrder(req.params.id, req.body);
  res.send({
    status: 200,
    data: editedOrder,
  });
};
