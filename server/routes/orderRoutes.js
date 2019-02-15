import express from 'express';
import OrderService from '../services/OrderService';

const router = express();
const orderServices = new OrderService();

router.get('/', (req, res) => {
  res.status(200).send(orderServices.getAll());
});

export default router;
