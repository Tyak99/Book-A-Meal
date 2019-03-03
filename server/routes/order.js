import express from 'express';
import orderController from '../controllers/order';

const router = express();

router.get('/', (req, res) => {
  res.send('order here');
});
router.post('/', orderController.create);
export default router;
