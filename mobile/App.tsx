import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { usersStore } from './stores/usersStore';
import { statsStore } from './stores/statsStore';
import { productsStore } from './stores/productsStore';
import { ordersStore } from './stores/ordersStore';
import { themeStore } from './stores/themeStore';

const App = observer(() => {
  const theme = themeStore.theme;
  const colors =
    theme === 'light'
      ? {
          bg: '#ffffff',
          text: '#000000',
          cardBg: '#f5f5f5',
          border: '#ddd',
          buttonBg: '#007bff',
          buttonText: '#ffffff',
        }
      : {
          bg: '#121212',
          text: '#ffffff',
          cardBg: '#1e1e1e',
          border: '#333',
          buttonBg: '#555',
          buttonText: '#ffffff',
        };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginVertical: 10,
      textAlign: 'center',
    },
    card: {
      backgroundColor: colors.cardBg,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 8,
      padding: 15,
      marginVertical: 10,
    },
    statText: {
      fontSize: 16,
      color: colors.text,
      marginVertical: 5,
    },
    button: {
      backgroundColor: colors.buttonBg,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 10,
    },
    buttonText: {
      color: colors.buttonText,
      fontSize: 16,
    },
    listItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    listItemText: {
      color: colors.text,
      fontSize: 14,
    },
  });

  useEffect(() => {
    usersStore.fetchUsers();
    statsStore.fetchStats();
    productsStore.fetchProducts();
    ordersStore.fetchOrders();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => themeStore.toggleTheme()}>
        <Text style={styles.buttonText}>Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.card}>
        <Text style={styles.title}>Statistics</Text>
        {statsStore.loading ? (
          <Text style={styles.statText}>Loading...</Text>
        ) : (
          <>
            <Text style={styles.statText}>Total Users: {statsStore.stats?.totalUsers}</Text>
            <Text style={styles.statText}>Total Orders: {statsStore.stats?.totalOrders}</Text>
            <Text style={styles.statText}>Total Products: {statsStore.stats?.totalProducts}</Text>
            <Text style={styles.statText}>Revenue: ${statsStore.stats?.revenue}</Text>
          </>
        )}
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Products</Text>
        {productsStore.loading ? (
          <Text style={styles.statText}>Loading...</Text>
        ) : (
          <FlatList
            data={productsStore.products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>
                  {item.name} - ${item.price}
                </Text>
              </View>
            )}
            scrollEnabled={false}
          />
        )}
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Orders</Text>
        {ordersStore.loading ? (
          <Text style={styles.statText}>Loading...</Text>
        ) : (
          <FlatList
            data={ordersStore.orders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>
                  Order {item.id}: User {item.userId} - Product {item.productId} (Qty: {item.quantity})
                </Text>
              </View>
            )}
            scrollEnabled={false}
          />
        )}
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Users</Text>
        {usersStore.loading ? (
          <Text style={styles.statText}>Loading...</Text>
        ) : (
          <FlatList
            data={usersStore.users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>
                  {item.name} - {item.email}
                </Text>
              </View>
            )}
            scrollEnabled={false}
          />
        )}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
});

export default App;
