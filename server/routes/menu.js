import express from 'express';
import menuController from '../controllers/menu';

const router = express();

router.get('/', menuController.test);
router.post('/', menuController.create);

export default router;
