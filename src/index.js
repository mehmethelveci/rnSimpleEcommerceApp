import React from 'react';
import { View, Text } from 'react-native';
import Store from './store';
import Routes from './screens';

const Src = () => (
  <Store>
    <Routes />
  </Store>
);

export default Src;
