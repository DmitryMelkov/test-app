import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { usersStore } from '../stores/usersStore';
import { statsStore } from '../stores/statsStore';
import { productsStore } from '../stores/productsStore';
import { ordersStore } from '../stores/ordersStore';

export const useInitializeApp = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        // Загрузка шрифтов Ant Design
        await Font.loadAsync({
          antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
          antfill: require('@ant-design/icons-react-native/fonts/antfill.ttf'),
        });

        // Первичная загрузка данных
        await Promise.all([
          usersStore.fetchUsers(),
          statsStore.fetchStats(),
          productsStore.fetchProducts(),
          ordersStore.fetchOrders(),
        ]);
      } catch (e) {
        console.warn('Initialization error:', e);
      } finally {
        setIsReady(true);
      }
    };

    loadResources();
  }, []);

  return isReady;
};
