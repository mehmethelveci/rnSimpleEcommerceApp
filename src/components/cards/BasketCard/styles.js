import { StyleSheet } from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderBottomColor: '#edf1f7',
      borderBottomWidth: 1,
      padding: 8,
    },
    image: {
      width: 96,
      height: 96,
      borderRadius: 10,
    },
    middle: {
      flex: 1,
      padding: 5,
      paddingHorizontal: 12,
    },
    column: {
      padding: 5,
      paddingHorizontal: 12,
      justifyContent: 'space-between',
    },
    priceAndDeal: {
      alignItems: 'flex-end',
      padding: 5,
    },
    name: {
      fontSize: 16,
    },
    pickerButton: {
      flexDirection: 'row',
      backgroundColor: '#edf1f7',
      padding: 4,
      paddingHorizontal: 8,
      marginVertical: 5,
      borderRadius: 4,
      width: 90,
      justifyContent: 'space-between',
    },
    itemCount: {
      fontSize: 14,
    },
    deleteButton: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
    },
    deal: {
      fontSize: 15,
      backgroundColor: 'blue',
      color: 'white',
      padding: 2,
    },
    price: {
      fontSize: 18,
      fontWeight: '700',
    },
  });
};
