import express from 'express';
import orderController from '../controllers/order';

const router = express();

router.get('/caterer/:id', orderController.allOrders);
router.post('/', orderController.create);
router.put('/:id', orderController.editOrder);
export default router;
