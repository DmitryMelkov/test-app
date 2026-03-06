import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { productsStore } from '../../stores/productsStore';
import { themeStore } from '../../stores/themeStore';
import { Accordion, List, ActivityIndicator } from '@ant-design/react-native';

const ProductsList = observer(() => {
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const theme = themeStore.theme;
  const isDark = theme === 'dark';
  const { products, loading } = productsStore;

  if (loading) {
    return <ActivityIndicator animating size="small" color={isDark ? '#fff' : '#000'} />;
  }

  const onChange = (activeSections: number[]) => {
    setActiveSections(activeSections);
  };

  return (
    <Accordion
      activeSections={activeSections}
      onChange={onChange}
      style={{
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: isDark ? '#333' : '#91d5ff',
      }}
    >
      <Accordion.Panel header={`Products (${products.length})`}>
        <List style={{ backgroundColor: isDark ? '#1e1e1e' : '#fff' }}>
          {products.map((item) => (
            <List.Item
              key={item.id}
              extra={`$${item.price}`}
              styles={{
                Item: { backgroundColor: isDark ? '#1e1e1e' : '#fff' },
                Content: { color: isDark ? '#fff' : '#000', fontSize: 14 },
                Extra: { color: isDark ? '#aaa' : '#666', fontSize: 14 },
              }}
            >
              {item.name}
            </List.Item>
          ))}
        </List>
      </Accordion.Panel>
    </Accordion>
  );
});

export default ProductsList;
