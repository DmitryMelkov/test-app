import { Stats } from '@/stores/statsStore';

export const getChartOption = (stats: Stats | null, theme: string) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#ffffff' : '#000000';
  const backgroundColor = isDark ? '#1e1e1e' : '#f5f5f5';
  const borderColor = isDark ? '#444444' : '#dddddd';

  return {
    backgroundColor,
    title: {
      text: 'Stats Overview',
      textStyle: { color: textColor },
    },
    tooltip: {
      backgroundColor: isDark ? '#2a2a2a' : '#ffffff',
      borderColor,
      textStyle: { color: textColor },
    },
    legend: {
      data: ['Value'],
      textStyle: { color: textColor },
    },
    xAxis: {
      data: ['Users', 'Orders', 'Products', 'Cats'],
      axisLabel: { color: textColor },
      axisLine: { lineStyle: { color: borderColor } },
      splitLine: { lineStyle: { color: borderColor } },
    },
    yAxis: {
      axisLabel: { color: textColor },
      axisLine: { lineStyle: { color: borderColor } },
      splitLine: { lineStyle: { color: borderColor } },
    },
    series: [
      {
        name: 'Value',
        type: 'bar',
        data: stats
          ? [stats.totalUsers, stats.totalOrders, stats.totalProducts, stats.totalCategories]
          : [],
        itemStyle: {
          color: isDark ? '#1890ff' : '#1890ff',
        },
      },
    ],
  };
};
