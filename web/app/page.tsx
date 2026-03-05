'use client';

import { observer } from 'mobx-react-lite';
import { useFetchData } from '@/hooks/useFetchData';
import DashboardStats from '@/components/DashboardStats/DashboardStats';
import ProductsList from '@/components/ProductsList/ProductsList';
import OrdersList from '@/components/OrdersList/OrdersList';
import UsersList from '@/components/UsersList/UsersList';
import Header from '@/components/Header/Header';
import Text from '@/ui/Text';

const Dashboard = observer(() => {
  useFetchData();

  return (
    <div>
      <Header />
      <div style={{ paddingTop: '20px' }}>
        <h1 style={{ margin: '0 0 20px 0' }}>Dashboard</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <DashboardStats />
          <ProductsList />
          <OrdersList />
          <UsersList />
        </div>
      </div>
    </div>
  );
});

export default function Page() {
  return <Dashboard />;
}
