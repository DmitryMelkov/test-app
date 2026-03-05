import { observer } from 'mobx-react-lite';
import { Collapse } from 'antd';
import { productsStore } from '@/stores/productsStore';
import Text from '../../ui/Text';
import './ProductsList.css';

const { Panel } = Collapse;

const ProductsList = observer(() => {
  return (
    <div>
      {productsStore.loading ? (
        <Text>Loading products...</Text>
      ) : (
        <Collapse>
          <Panel header="Products" key="products">
            {productsStore.products.map((product) => (
              <div key={product.id}>
                <Text>
                  {product.name} - ${product.price}
                </Text>
              </div>
            ))}
          </Panel>
        </Collapse>
      )}
    </div>
  );
});

export default ProductsList;
