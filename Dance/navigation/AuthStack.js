import React from 'react';
import { Platform, ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/Login';

const AuthStack = createStackNavigator(
  {
    Landing: SignInScreen,
  }
);

AuthStack.path = '';

export default AuthStack;
