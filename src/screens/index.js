import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Home';
import Deals from './Deals';
import Basket from './Basket';
import Header from '../navigators/Header';
import TabButtons from '../navigators/TabButton';

const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const Tabs = (props) => (
  <Tab.Navigator tabBar={(props2) => <TabButtons {...props2} />} tabBarPosition='bottom'>
    <Tab.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => {
        if (navigation.isFocused()) {
          props.navigation.setOptions({ title: 'Home' });
        }

        return { iconName: 'home-variant' };
      }}
    />
    <Tab.Screen
      name="Deals"
      component={Deals}
      options={({ navigation }) => {
        if (navigation.isFocused()) {
          props.navigation.setOptions({ title: 'Hottest Deals' });
        }

        return { iconName: 'tag' };
      }}
    />
    <Tab.Screen
      name="Basket"
      component={Basket}
      options={({ navigation }) => {
        if (navigation.isFocused()) {
          props.navigation.setOptions({ title: 'Basket' });
        }

        return { iconName: 'basket' };
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Home}
      options={{ iconName: 'account'}}
    />
  </Tab.Navigator>
);

const StackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name='Tabs' component={Tabs} options={{ header: (navigation) => <Header {...navigation} /> }} />
  </Stack.Navigator>
);

const Routes = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name='Tabs' component={StackScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Routes;
