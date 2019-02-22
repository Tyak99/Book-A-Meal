import express from 'express';
import orderControllers from '../controllers/orderController';

const router = express();

router.get('/', orderControllers.getAllOrders);

router.post('/', orderControllers.postOrder);

router.put('/:id', orderControllers.editOrder);

export default router;
