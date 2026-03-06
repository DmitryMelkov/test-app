import axios from 'axios';
import { API_URL } from '../config';
import { Order } from '../types';

const apiClient = axios.create({
  baseURL: API_URL,
});

export const OrderService = {
  async getOrders(): Promise<Order[]> {
    const response = await apiClient.get<Order[]>('/api/orders');
    return response.data;
  },
};
