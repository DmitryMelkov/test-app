import { Platform } from 'react-native';

// Для Android-эмулятора используем 10.0.2.2, для Web - localhost, для iOS/реальных устройств - ваш IP
const getApiUrl = () => {
  if (Platform.OS === 'web') {
    return 'http://localhost:3001';
  }
  // Замените на ваш IP для тестирования на реальном устройстве
  return 'http://192.168.0.156:3001';
};

export const API_URL = getApiUrl();
