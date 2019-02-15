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
  const newMeal = {
    name: req.body.name,
    size: req.body.size,
    price: req.body.price,
  };
  res.status(201).send(mealService.setMeal(newMeal));
});

router.put('/:id', (req, res) => {
  const editedMeal = {
    name: req.body.name,
    size: req.body.size,
    price: req.body.price,
  };
  res.status(202).send(mealService.editMeal(req.params.id, editedMeal));
});

router.delete('/:id', (req, res) => {
  mealService.deleteMeal(req.params.id);
  res.status(202).send('Meal deleted');
});
export default router;
