import { makeAutoObservable } from 'mobx';
import { Order } from '../types';
import { OrderService } from '../services/OrderService';

class OrdersStore {
  orders: Order[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchOrders() {
    this.loading = true;
    try {
      this.orders = await OrderService.getOrders();
    } catch (error) {
      console.error('Failed to fetch orders', error);
    } finally {
      this.loading = false;
    }
  }
}

export const ordersStore = new OrdersStore();
