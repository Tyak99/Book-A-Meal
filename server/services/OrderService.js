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

  addOrder(order) {
    const allOrders = this.fetchAll();
    const newOrder = {
      id: allOrders.length + 1,
      meals: order.meals,
      price: order.price,
      customer: order.customer,
    };
    allOrders.push(newOrder);
    return allOrders;
  }

  editOrder(id, data) {
    const order = this.fetchAll()[id - 1];
    order.meals = data.meals;
    order.price = data.price;
  }
}
