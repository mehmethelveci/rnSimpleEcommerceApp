import { StyleSheet } from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      paddingVertical: 10,
    },
    card: {
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10.00,
    },
    image: {
      borderRadius: 10,
    },
    footer: {
      flex: 1,
      padding: 10,
      paddingTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    name: {
      fontSize: 15,
      fontWeight: '500',
      flex: 1,
    },
    price: {
      fontSize: 15,
      fontWeight: 'bold',
    },
  });
};
