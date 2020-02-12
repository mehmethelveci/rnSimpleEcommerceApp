import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';

import ItemCard from '../../components/cards/ItemCard';
import { products, hotdeals, productTimings } from '../../api';
import { useItems } from '../../store';
import itemsActions from '../../actions/items';
import convertArrayToObject from '../../utils/convertArrayToObject';
import dateSort from '../../utils/dateSort';

const Home = () => {
  const [ itemState, itemDispatch ] = useItems();

  const getProducts = async () => {
    const res = await products();

    if (res.status === 200) {
      itemDispatch(itemsActions.updateItems(convertArrayToObject(res.data, 'id')));
    }
  };
  const getHotdeals = async () => {
    const res = await hotdeals();

    if (res.status === 200) {
      itemDispatch(itemsActions.updateHotdeals(res.data));
    }
  };
  const getProductTimings = async () => {
    const res = await productTimings();

    if (res.status === 200) {
      itemDispatch(itemsActions.updateProductTimings(res.data));
    }
  };
  const addBasket = (id) => {
    const newBasket = itemState.basket;

    const index = newBasket.findIndex(x => x.productId === id);

    if (index === -1) {
      newBasket.push({ productId: id, count: 1 });
    } else {
      newBasket[index].count += 1;
    }

    itemDispatch(itemsActions.updateBasket(newBasket));
  };

  useEffect(() => {
    getProducts();
    getHotdeals();
    getProductTimings();
  }, []);

  return (
    <View>
      <FlatList
        data={dateSort(itemState.productTimings, 'startDate')}
        keyExtractor={(item) => item.id}
        renderItem={(data) => itemState.items[data.item.productId] && <ItemCard onPress={addBasket} {...itemState.items[data.item.productId]} />}
      />
    </View>
  );
};

export default Home;
