import MealService from '../services/MealService';

const mealService = new MealService();

exports.getAll = (req, res) => {
  const meals = mealService.getAll();
  res.send({
    status: 200,
    data: meals,
  });
};

exports.getOneMeal = (req, res) => {
  const meal = mealService.get(req.params.id);

  if (!meal) {
    return res.send({
      status: 400,
      data: {
        message: 'Sorry, no meal with that id found',
      },
    });
  }
  return res.send({
    status: 200,
    data: meal,
  });
};

exports.postMeal = (req, res) => {
  const { name, size, price } = req.body;
  if (!name || !size || !price) {
    return res.send({
      status: 400,
      data: {
        message: 'All input fields must be filled',
      },
    });
  }
  const newMeal = {
    name,
    size,
    price,
  };
  const setMeal = mealService.setMeal(newMeal);
  return res.send({
    status: 201,
    data: setMeal,
  });
};

exports.editMeal = (req, res) => {
  const meal = mealService.get(req.params.id);
  if (!meal) {
    return res.send({
      status: 400,
      data: {
        message: 'Sorry, no meal with that id found',
      },
    });
  }

  const editedMeal = mealService.editMeal(req.params.id, req.body);
  return res.send({
    status: 200,
    data: editedMeal,
  });
};

exports.deleteMeal = (req, res) => {
  const meal = mealService.get(req.params.id);
  if (!meal) {
    res.send({
      status: 400,
      data: {
        message: 'Sorry, no meal with that id found',
      },
    });
  }
  mealService.deleteMeal(req.params.id);
  res.send({
    status: 200,
    data: {
      message: 'Meal deleted successfully',
    },
  });
};
