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
router.post('/', (req, res) => {
  const meal = {
    id: req.body.id,
    name: req.body.name,
    size: req.body.size,
    price: req.body.price,
  };
  res.send(mealService.setMeal(meal));
});

router.put('/:id', (req, res) => {
  const editedMeal = {
    name: req.body.name,
    size: req.body.size,
    price: req.body.price,
  };
  res.send(mealService.editMeal(req.params.id, editedMeal));
});
export default router;
