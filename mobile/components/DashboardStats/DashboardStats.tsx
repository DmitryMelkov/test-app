import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { observer } from 'mobx-react-lite';
import { statsStore } from '../../stores/statsStore';
import { themeStore } from '../../stores/themeStore';
import { BarChart } from 'react-native-gifted-charts';

const DashboardStats = observer(() => {
  const theme = themeStore.theme;
  const isDark = theme === 'dark';
  const { stats, loading } = statsStore;

  if (loading) {
    return <ActivityIndicator size="large" color={isDark ? '#fff' : '#000'} />;
  }

  const data = [
    { value: stats?.totalUsers || 0, label: 'Users', frontColor: '#1890ff' },
    { value: stats?.totalOrders || 0, label: 'Orders', frontColor: '#1890ff' },
    {
      value: stats?.totalProducts || 0,
      label: 'Products',
      frontColor: '#1890ff',
    },
  ];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? '#1e1e1e' : '#fff',
          borderColor: isDark ? '#333' : '#e6f7ff',
        },
      ]}
    >
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>Statistics</Text>
      <Text style={[styles.summary, { color: isDark ? '#aaa' : '#666' }]}>
        Total Users: {stats?.totalUsers} Total Orders: {stats?.totalOrders} Total Products:{' '}
        {stats?.totalProducts} Revenue: ${stats?.revenue}
      </Text>
      <Text style={[styles.subTitle, { color: isDark ? '#fff' : '#000' }]}>Stats Overview</Text>
      <View style={styles.chartContainer}>
        <BarChart
          data={data}
          barWidth={40}
          noOfSections={5}
          barBorderRadius={4}
          frontColor="#1890ff"
          yAxisThickness={0}
          xAxisThickness={0}
          hideRules
          yAxisTextStyle={{ color: isDark ? '#aaa' : '#666', fontSize: 10 }}
          xAxisLabelTextStyle={{
            color: isDark ? '#aaa' : '#666',
            fontSize: 10,
          }}
          width={Dimensions.get('window').width - 100}
          height={200}
          isAnimated
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  summary: {
    fontSize: 12,
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chartContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashboardStats;
