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
      order.status = data.status;
      order.delivery_address = data.delivery_address;
      order.createdAt = data.createdAt;
      return order;
    });
  }

  getAll() {
    return this.fetchAll();
  }

  get(id) {
    return this.fetchAll()[id - 1];
  }

  addOrder(order) {
    const allOrders = this.fetchAll();
    const newOrder = { id: allOrders.length + 1, ...order, createdAt: Date() };
    allOrders.push(newOrder);
    return newOrder;
  }

  editOrder(id, data) {
    const order = this.fetchAll()[id - 1];
    const editedOrder = Object.assign(order, data);
    return editedOrder;
  }
}
