import express from 'express';
import mealController from '../controllers/mealController';

const router = express.Router();

router.get('/', mealController.getAll);

router.get('/:id', mealController.getOneMeal);

router.post('/', mealController.postMeal);

router.put('/:id', mealController.editMeal);

router.delete('/:id', mealController.deleteMeal);
export default router;
