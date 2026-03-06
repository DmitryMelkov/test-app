import React from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { themeStore } from '../../stores/themeStore';
import { triggerHaptic } from '../../utils/haptics';
import Header from '../../components/Header/Header';
import DashboardStats from '../../components/DashboardStats/DashboardStats';
import ProductsList from '../../components/ProductsList/ProductsList';
import OrdersList from '../../components/OrdersList/OrdersList';
import UsersList from '../../components/UsersList/UsersList';

const HomeScreen = observer(() => {
  const router = useRouter();
  const theme = themeStore.theme;
  const isDark = theme === 'dark';

  const handleNavigate = () => {
    triggerHaptic();
    router.push('/details');
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: isDark ? '#121212' : '#fff' }]}
      edges={['top', 'left', 'right']}
    >
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.navigationSection}>
          <TouchableOpacity
            style={[styles.navButton, { backgroundColor: isDark ? '#333' : '#007AFF' }]}
            onPress={handleNavigate}
          >
            <Text style={styles.navButtonText}>Перейти к деталям</Text>
          </TouchableOpacity>
        </View>
        <DashboardStats />
        <ProductsList />
        <OrdersList />
        <UsersList />
      </ScrollView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 15,
  },
  navigationSection: {
    marginBottom: 20,
    alignItems: 'center',
  },
  navButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
