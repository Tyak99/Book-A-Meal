import OrderService from '../services/OrderService';

const orderServices = new OrderService();

exports.getAllOrders = (req, res) => {
  const orders = orderServices.getAll();
  res.send({
    status: 'success',
    data: orders,
  });
};

exports.postOrder = (req, res) => {
  if ((!req.body.meals, !req.body.price, !req.body.delivery_address)) {
    res.send({
      status: 'error',
      message: 'all fields must be filled',
    });
  }
  const newOrder = {
    meals: req.body.meals,
    price: req.body.price,
    customer: req.user.id,
    delivery_address: req.body.delivery_address,
  };
  orderServices.addOrder();
  res.status(201).send({
    messsage: 'order created successfully',
    data: newOrder,
  });
};

exports.editOrder = (req, res) => {
  const order = orderServices.get(req.params.id);
  if (!order) {
    res.send({
      status: 'error',
      message: 'order cant be found',
    });
  }
  const editedOrder = {
    meals: req.body.meals,
    price: req.body.price,
  };
  orderServices.editOrder(req.params.id, editedOrder);
  res.status(202).send({
    status: 'success',
    message: 'order edited successfully',
  });
};
