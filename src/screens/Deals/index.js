import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import ItemCard from '../../components/cards/ItemCard';
import makeStyle from './styles';
import { useItems } from '../../store';
import randomImage from '../../utils/randomImage';
import itemsActions from '../../actions/items';

const Deals = props => {
  const [ itemsState, itemDispatch ] = useItems();
  const [ first, setFirst ] = useState([]);
  const [ second, setSecond ] = useState([]);
  const styles = makeStyle();

  const addItems = () => {
    let firstHegiht = 0;

    let secondHeight = 0;
    const firstLayout = [];
    const secondLayout = [];

    itemsState.hotdeals.forEach(x => {
      if (itemsState.items[x.productId] !== undefined) {
        const getRandom = randomImage();

        if (firstHegiht > secondHeight) {
          secondHeight += getRandom.height;
          secondLayout.push({ ...itemsState.items[x.productId], image: getRandom.uri, height: getRandom.height });
        } else {
          firstHegiht += getRandom.height;
          firstLayout.push({ ...itemsState.items[x.productId], image: getRandom.uri, height: getRandom.height });
        }
      }
    });

    setFirst(firstLayout);
    setSecond(secondLayout);
  };

  const addBasket = (id) => {
    const newBasket = itemsState.basket;

    const index = newBasket.findIndex(x => x.productId === id);

    if (index === -1) {
      newBasket.push({ productId: id, count: 1 });
    } else {
      newBasket[index].count += 1;
    }

    itemDispatch(itemsActions.updateBasket(newBasket));
  };

  useEffect(() => {
    addItems();
  }, [ itemsState.items ]);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal={false} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.column}>
          {first.map((item, index) => <ItemCard onPress={addBasket} key={item.id} { ...item } />)}
        </View>
        <View style={styles.column}>
          {second.map((item, index) => <ItemCard onPress={addBasket} key={item.id} { ...item } />)}
        </View>
      </View>
    </ScrollView>
  );
};

export default Deals;
