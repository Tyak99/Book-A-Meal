import Order from '../models/Order';

export default class OrderService {
  fetchAll() {
    this.orders = [];
    return this.orders.map((data) => {
      const order = new Order();
      order.id = data.id;
      order.meals = data.meals;
      order.price = data.price;
      order.customer = data.customer;
      return order;
    });
  }

  getAll() {
    return this.fetchAll();
  }
}
