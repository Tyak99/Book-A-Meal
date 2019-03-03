import express from 'express';
import passport from 'passport';
import passportService from '../services/passport';
import orderController from '../controllers/order';

const router = express();

const requireAuth = passport.authenticate('jwt', { session: false });

router.get('/caterer/:id', requireAuth, orderController.allOrders);
router.post('/', requireAuth, orderController.create);
router.put('/:id', requireAuth, orderController.editOrder);
export default router;
