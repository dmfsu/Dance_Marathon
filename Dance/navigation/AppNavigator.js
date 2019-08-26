import React from 'react';
import { ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View } from 'react-native';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthStack';



export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthStack,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'Auth',
  })
);
