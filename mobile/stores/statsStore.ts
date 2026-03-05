import { makeAutoObservable } from 'mobx';
import axios from 'axios';

export interface Stats {
  totalUsers: number;
  totalOrders: number;
  totalProducts: number;
  revenue: number;
}

class StatsStore {
  stats: Stats | null = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchStats() {
    this.loading = true;
    try {
      const response = await axios.get<Stats>('http://localhost:3001/api/stats');
      this.stats = response.data;
    } catch (error) {
      console.error('Failed to fetch stats', error);
    } finally {
      this.loading = false;
    }
  }
}

export const statsStore = new StatsStore();
