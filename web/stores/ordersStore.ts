import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

export interface Order {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
}

class OrdersStore {
  orders: Order[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchOrders() {
    this.loading = true;
    try {
      const response = await axios.get<Order[]>('http://localhost:3001/api/orders');
      runInAction(() => {
        this.orders = response.data;
      });
    } catch (error) {
      console.error('Failed to fetch orders', error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}

export const ordersStore = new OrdersStore();
