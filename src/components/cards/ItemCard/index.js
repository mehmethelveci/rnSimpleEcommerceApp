import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import makeStyle from './style';
import prices from '../../../utils/prices';

const ItemCard = props => {
  const styles = makeStyle();

  return (
    <TouchableOpacity onPress={() => props.onPress(props.id)} style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} height={props.height} source={{ uri: props.image }} />
        <View style={styles.footer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.price}>{prices(props.price)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ItemCard.defaultProps = {
  name: 'Ürün adı',
  price: '20',
  image: 'https://www.gokhanaygun.net/wp-content/uploads/2018/10/firefox-un-android-versiyonuna-resim-icinde-resim-ozelligi-geliyor.jpg',
  onPress: () => {},
  height: 200,
};

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ItemCard;
