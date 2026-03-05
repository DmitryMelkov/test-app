import { useEffect } from 'react';
import { usersStore } from '@/stores/usersStore';
import { statsStore } from '@/stores/statsStore';
import { productsStore } from '@/stores/productsStore';
import { ordersStore } from '@/stores/ordersStore';

export const useFetchData = () => {
  useEffect(() => {
    usersStore.fetchUsers();
    statsStore.fetchStats();
    productsStore.fetchProducts();
    ordersStore.fetchOrders();
  }, []);
};
