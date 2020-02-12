import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import makeStyle from './styles';
import prices from '../../../utils/prices';

const BasketCard = props => {
  const styles = makeStyle();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.middle}>
        <Text style={styles.name}>{props.name}</Text>
        <TouchableOpacity style={styles.pickerButton} onPress={props.onPressPicker}>
          <Text style={styles.itemCount}>Adet: {props.count}</Text>
          <Icon name='chevron-down' size={16} />
        </TouchableOpacity>
      </View>
      <View style={styles.column}>
        <TouchableOpacity style={styles.deleteButton} onPress={() => props.onPressDelete(props.id)}><Icon name='trash-can' size={24} /></TouchableOpacity>
        <View style={styles.priceAndDeal}>
          <Text>{props.deal && <Text style={styles.deal}>{props.deal}</Text>}</Text>
          <Text style={styles.price}>{prices(props.price)}</Text>
        </View>
      </View>
    </View>
  );
};

BasketCard.defaultProps = {
  image: 'https://www.gokhanaygun.net/wp-content/uploads/2018/10/firefox-un-android-versiyonuna-resim-icinde-resim-ozelligi-geliyor.jpg',
  name: 'Ürün Adı',
  onPressPicker: () => {},
  onPressDelete: () => {},
  price: '50',
  count: 1,
};

BasketCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onPressPicker: PropTypes.func.isRequired,
  onPressDelete: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  deal: PropTypes.string,
};

export default BasketCard;
