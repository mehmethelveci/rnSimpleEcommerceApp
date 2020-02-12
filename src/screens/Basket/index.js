import React from 'react';
import { ScrollView, FlatList, View } from 'react-native';

import BasketCard from '../../components/cards/BasketCard';
import { useItems } from '../../store';
import itemsActions from '../../actions/items';
import BasketFooter from '../../components/basketFooter';

const Basket = () => {
  const [ itemsState, itemsDispatch ] = useItems();

  const deleteBasket = (id) => {
    const newBasket = [ ...itemsState.basket.filter(x => x.productId !== id) ];

    itemsDispatch(itemsActions.updateBasket(newBasket));
  };

  const pickerButton = (id) => {

  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={itemsState.basket}
          keyExtractor={item => item.productId}
          renderItem={(data) => itemsState.items[data.item.productId] && <BasketCard
            {...itemsState.items[data.item.productId]}
            count={data.item.count}
            onPressDelete={deleteBasket}
          />}
        />
      </View>
      <View>
        <BasketFooter />
      </View>
    </View>
  );
};

export default Basket;
