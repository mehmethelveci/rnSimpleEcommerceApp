import { StyleSheet } from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      height: 80,
      backgroundColor: 'white',
      flexDirection: 'row',
    },
    priceColumn: {
      justifyContent: 'space-between',
      padding: 16,
    },
    totalText: {
      color: '#8992a3',
    },
    priceText: {
      fontSize: 18,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    button: {
      padding: 16,
      backgroundColor: '#0a73e6',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
    },
  });
};
