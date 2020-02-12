import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import makeStyle from './styles';
import { useItems } from '../../store';
import prices from '../../utils/prices';

const BasketFooter = () => {
  const styles = makeStyle();
  const [ itemsState ] = useItems();

  const totalPrice = itemsState.basket.map(item => itemsState.items[item.productId] &&
    itemsState.items[item.productId].price * item.count).reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

  return (
    <View style={styles.container}>
      <View style={styles.priceColumn}>
        <Text style={styles.totalText}>TOPLAM</Text>
        <Text style={styles.priceText}>{prices(totalPrice)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Sepeti Onayla
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketFooter;
