import express from 'express';
import MenuService from '../services/MenuServices';

const router = express.Router();
const menuServices = new MenuService();

router.get('/', (req, res) => {
  res.status(200).send(menuServices.getAll());
});

router.get('/:id', (req, res) => {
  res.status(200).send(menuServices.get(req.params.id));
});

router.post('/', (req, res) => {
  const newMenu = {
    name: req.body.name,
    price: req.body.price,
    meals: req.body.meals,
  };
  res.status(201).send(menuServices.addMeal(newMenu));
});
export default router;
