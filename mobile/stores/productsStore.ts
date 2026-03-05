import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { API_URL } from '../config';

export interface Product {
  id: number;
  name: string;
  price: number;
}

class ProductsStore {
  products: Product[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProducts() {
    this.loading = true;
    try {
      const response = await axios.get<Product[]>(`${API_URL}/api/products`);
      this.products = response.data;
    } catch (error) {
      console.error('Failed to fetch products', error);
    } finally {
      this.loading = false;
    }
  }
}

export const productsStore = new ProductsStore();
