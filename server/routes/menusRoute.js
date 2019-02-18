import express from 'express';
import menuControllers from '../controllers/menuController';

const router = express.Router();

router.get('/', menuControllers.getMenu);

router.get('/:id', menuControllers.getOneMenu);

router.post('/', menuControllers.postMenu);
export default router;
