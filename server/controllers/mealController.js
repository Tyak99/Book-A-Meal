import MealService from '../services/MealService';

const mealService = new MealService();

exports.getAll = (req, res) => {
  const meals = mealService.getAll();
  res.send({
    status: 'success',
    data: meals,
  });
};

exports.getOneMeal = (req, res) => {
  const meal = mealService.get(req.params.id);

  if (!meal) {
    res.send({
      status: 'error',
      data: 'No meal with that id found',
    });
  }
  res.send({
    status: 'success',
    data: meal,
  });
};

exports.postMeal = (req, res) => {
  const newMeal = {
    name: req.body.name,
    size: req.body.size,
    price: req.body.price,
  };
  mealService.setMeal();
  res.status(201).send({
    status: 'meal posted successfully',
    data: newMeal,
  });
};

exports.editMeal = (req, res) => {
  const meal = mealService.get(req.params.id);
  if (!meal) {
    res.send({
      status: 'error',
      message: 'meal cant be found',
    });
  }
  const editedMeal = {
    name: req.body.name,
    size: req.body.size,
    price: req.body.price,
  };
  mealService.editMeal(req.params.id, editedMeal);
  res.status(202).send({
    status: 'meal edited successfully',
    data: editedMeal,
  });
};

exports.deleteMeal = (req, res) => {
  const meal = mealService.get(req.params.id);
  if (!meal) {
    res.send({
      status: 'error',
      message: 'meal cant be found',
    });
  }
  mealService.deleteMeal(req.params.id);
  res.status(202).send('Meal deleted');
  res.status(202).send({
    status: 'success',
    message: 'meal deleted successfully',
  });
};
