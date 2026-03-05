'use client';

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { usersStore } from '@/stores/usersStore';
import { statsStore } from '@/stores/statsStore';
import ReactECharts from 'echarts-for-react';

const Dashboard = observer(() => {
  useEffect(() => {
    usersStore.fetchUsers();
    statsStore.fetchStats();
  }, []);

  const chartOption = {
    title: {
      text: 'Stats Overview'
    },
    tooltip: {},
    legend: {
      data: ['Stats']
    },
    xAxis: {
      data: ['Users', 'Orders', 'Revenue']
    },
    yAxis: {},
    series: [{
      name: 'Value',
      type: 'bar',
      data: statsStore.stats ? [
        statsStore.stats.totalUsers,
        statsStore.stats.totalOrders,
        statsStore.stats.revenue
      ] : []
    }]
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {statsStore.loading ? <p>Loading stats...</p> : (
        <div>
          <p>Total Users: {statsStore.stats?.totalUsers}</p>
          <p>Total Orders: {statsStore.stats?.totalOrders}</p>
          <p>Revenue: {statsStore.stats?.revenue}</p>
          <ReactECharts option={chartOption} />
        </div>
      )}
      <h2>Users</h2>
      {usersStore.loading ? <p>Loading users...</p> : (
        <ul>
          {usersStore.users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default function Page() {
  return <Dashboard />;
}
