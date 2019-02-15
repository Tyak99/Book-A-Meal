import express from 'express';
import OrderService from '../services/OrderService';

const router = express();
const orderServices = new OrderService();

router.get('/', (req, res) => {
  res.status(200).send(orderServices.getAll());
});

router.post('/', (req, res) => {
  const newOrder = {
    meals: req.body.meals,
    price: req.body.price,
    customer: req.user.id,
  };
  res.status(202).send(orderServices.addOrder(newOrder));
});

export default router;
