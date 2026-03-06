import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';
import { API_URL } from '../config';

export interface Stats {
  totalUsers: number;
  totalOrders: number;
  totalProducts: number;
  totalCategories: number;
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
      const response = await axios.get<Stats>(`${API_URL}/api/stats`);
      runInAction(() => {
        this.stats = response.data;
      });
    } catch (error) {
      console.error('Failed to fetch stats', error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}
export const statsStore = new StatsStore();
