import { observer } from 'mobx-react-lite';
import { Collapse } from 'antd';
import { ordersStore } from '@/stores/ordersStore';
import Text from '../../ui/Text';
import './OrdersList.css';

const { Panel } = Collapse;

const OrdersList = observer(() => {
  return (
    <div>
      {ordersStore.loading ? (
        <Text>Loading orders...</Text>
      ) : (
        <Collapse>
          <Panel header="Orders" key="orders">
            {ordersStore.orders.map((order) => (
              <div key={order.id}>
                <Text>
                  Order {order.id}: User {order.userId} - Product {order.productId} (Qty: {order.quantity})
                </Text>
              </div>
            ))}
          </Panel>
        </Collapse>
      )}
    </div>
  );
});

export default OrdersList;
