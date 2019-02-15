import express from 'express';
import MealService from '../services/MealService';

const router = express.Router();
const mealService = new MealService();

router.get('/', (req, res) => {
  res.status(200).send(mealService.getAll());
});
router.get('/:id', (req, res) => {
  res.status(200).send(mealService.get(req.params.id));
});

export default router;
