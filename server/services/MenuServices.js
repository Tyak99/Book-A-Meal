import Menu from '../models/Menu';

export default class MenuServices {
  fetchAll() {
    this.menu = [
      {
        id: 1,
        name: 'Breakfast Classic',
        price: 1500,
        meals: ['Jollof Rice', 'Salad', 'Beans'],
      },
      {
        id: 2,
        name: 'Lunch Combo',
        price: 1200,
        meals: ['Moimoi', 'Garri', 'Ice Block'],
      },
    ];
    return this.menu.map((data) => {
      const menu = new Menu();
      menu.id = data.id;
      menu.name = data.name;
      menu.price = data.price;
      menu.meals = data.meals;
      return menu;
    });
  }

  getAll() {
    return this.fetchAll();
  }
}
