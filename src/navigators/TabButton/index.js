import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useItems } from '../../store';

const TabButtonsLayout = (props) => {
  const [ itemsState ] = useItems();

  const basketCount = itemsState.basket.reduce((a, b) => a + (b.count || 0), 0);

  return (
    <View style={{ flexDirection: 'row' }}>
      {props.state.routes.map((item, index) => {
        const { options } = props.descriptors[item.key];
        const label = options.tabBarLabel !== undefined ?
          options.tabBarLabel :
          options.title !== undefined ?
            options.title : item.name;

        const isFocused = props.state.index === index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: item.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(item.name);
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
            type: 'tabLongPress',
            target: item.key,
          });
        };

        const inputRange = props.state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(props.position, {
          inputRange: inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0.5)),
        });

        return (
          <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', paddingTop: 10 }}>
            { index === 2 && basketCount > 0 && <View style={{ backgroundColor: 'red', borderRadius: 20, position: 'absolute', right: 25, top: 2, padding: 3 }}><Text style={{ color: 'white', fontSize: 12}}>{basketCount}</Text></View>}
            <Animated.Text style={{ opacity }} ><Icon name={options.iconName} size={24} color={isFocused ? '#0E5BDB' : '#000'} /></Animated.Text>
            <Animated.Text style={{ opacity: opacity, color: isFocused ? '#0E5BDB' : '#000' }}>{label}</Animated.Text>
            <SafeAreaView></SafeAreaView>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

class TabButtons extends React.Component {
  render() {
    return (
      <TabButtonsLayout {...this.props} />
    );
  }
}

export default TabButtons;
