import Meals from '../models/Meals';

export default class MealService {
  fetchAllMeals() {
    this.meals = [
      {
        id: 1,
        name: 'Jollof Rice',
        size: '1',
        price: '500',
        currency: 'NGN',
      },
      {
        id: 2,
        name: 'Fried Rice',
        size: '1',
        price: '500',
        currency: 'NGN',
      },
      {
        id: 3,
        name: 'Coconut Rice',
        size: '1',
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
      meal.currency = 'NGN';
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
    const newMeal = { id: allMeal.length + 1, ...data, currency: 'NGN' };
    allMeal.push(newMeal);
    return newMeal;
  }

  editMeal(id, data) {
    const meal = this.fetchAllMeals()[id - 1];
    const editedMeal = Object.assign(meal, data);
    return editedMeal;
  }

  deleteMeal(id) {
    const meals = this.fetchAllMeals();
    return meals.filter(data => data.id !== id);
  }
}
