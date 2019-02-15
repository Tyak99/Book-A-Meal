import Meals from '../models/Meals';
import Meal from '../models/Meals';

export default class MealService {
  fetchAllMeals() {
    this.meals = [
      {
        id: 1,
        name: 'Jollof Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN',
      },
      {
        id: 2,
        name: 'Fried Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN',
      },
      {
        id: 3,
        name: 'Coconut Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN',
      },
    ];

    return this.meals.map((data) => {
      const meal = new Meals();
      meal.id = data.id;
      meal.name = data.name;
      meal.size = data.size;
      meal.price = data.price;
      return meal;
    });
  }

  getAll() {
    return this.fetchAllMeals();
  }

  get(id) {
    return this.fetchAllMeals()[id - 1];
  }

  setMeal(data) {
    const allMeal = this.fetchAllMeals();
    const newMeal = {
      id: allMeal.length + 1,
      name: data.name,
      size: data.size,
      price: data.price,
    };
    allMeal.push(newMeal);
    return allMeal;
  }

  editMeal(id, newMeal) {
    const meal = this.fetchAllMeals()[id - 1];
    meal.price = newMeal.price;
    meal.name = newMeal.name;
    meal.size = newMeal.size;
    return meal;
  }

  deleteMeal(id) {
    const meals = this.fetchAllMeals();
    return meals.filter((data) => {
      return data.id !== id;
    });
  }
}
