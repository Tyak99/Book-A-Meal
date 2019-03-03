import express from 'express';
import mealController from '../controllers/meal';

const router = express.Router();

router.post('/', mealController.create);
router.get('/', mealController.list);

export default router;
