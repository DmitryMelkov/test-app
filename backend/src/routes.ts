import { Application } from 'express';
import { users } from './data/users';
import { products } from './data/products';
import { orders } from './data/orders';
import { categories } from './data/categories';

export interface Stats {
  totalUsers: number;
  totalOrders: number;
  totalProducts: number;
  totalCategories: number;
  revenue: number;
}

const calculateStats = (): Stats => ({
  totalUsers: users.length,
  totalOrders: orders.length,
  totalProducts: products.length,
  totalCategories: categories.length,
  revenue: orders.reduce((sum, order) => {
    const product = products.find((p) => p.id === order.productId);
    return sum + (product ? product.price * order.quantity : 0);
  }, 0),
});

export const setupRoutes = (app: Application) => {
  const stats = calculateStats();

  app.get('/api/users', (req, res) => {
    res.json(users);
  });

  app.get('/api/stats', (req, res) => {
    res.json(stats);
  });

  app.get('/api/products', (req, res) => {
    res.json(products);
  });

  app.get('/api/orders', (req, res) => {
    res.json(orders);
  });

  app.get('/api/categories', (req, res) => {
    res.json(categories);
  });
};
