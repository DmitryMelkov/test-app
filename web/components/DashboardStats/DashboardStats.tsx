import { observer } from 'mobx-react-lite';
import ReactECharts from 'echarts-for-react';
import { statsStore } from '@/stores/statsStore';
import { themeStore } from '@/stores/themeStore';
import { getChartOption } from '@/utils/chartOptions';
import Text from '../../ui/Text';
import './DashboardStats.css';

const DashboardStats = observer(() => {
  const chartOption = getChartOption(statsStore.stats, themeStore.theme);

  return (
    <div className="card">
      <h2>Statistics</h2>
      {statsStore.loading ? (
        <Text>Loading stats...</Text>
      ) : (
        <div>
          <Text>Total Users: {statsStore.stats?.totalUsers} | </Text>
          <Text>Total Orders: {statsStore.stats?.totalOrders} | </Text>
          <Text>Total Products: {statsStore.stats?.totalProducts} | </Text>
          <Text>Total Categories: {statsStore.stats?.totalCategories} | </Text>
          <Text>Revenue: ${statsStore.stats?.revenue}</Text>
          <ReactECharts option={chartOption} />
        </div>
      )}
    </div>
  );
});

export default DashboardStats;
