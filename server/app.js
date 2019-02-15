import express from 'express';
import MealService from './services/MealService';

const app = express();
const mealService = new MealService();

app.get('/api/v1/meals', (req, res) => {
  res.status(200).send(mealService.getAll());
});
app.get('/api/v1/meals/:id', (req, res) => {
  res.status(200).send(mealService.get(req.params.id));
});
const PORT = 3000;
app.listen(PORT);
