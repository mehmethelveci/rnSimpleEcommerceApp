import { StyleSheet } from 'react-native';

export default () => {
  return StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: '500',
    },
  });
};
