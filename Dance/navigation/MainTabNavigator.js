import React from 'react';
import {Platform} from 'react-native';
import {
  createStackNavigator,
  createMaterialTopTabNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import ProfileScreen from '../screens/ProfileScreen';

const EventsStack = createStackNavigator(
    {
      Events: LinksScreen,
    },
);

EventsStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

EventsStack.path = '';

const ProfileStack = createStackNavigator(
    {
      Profile: ProfileScreen,
    },
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createMaterialTopTabNavigator({
  ProfileStack,
  EventsStack,
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    showIcon: true,
    style: {
      backgroundColor: '#FFFFFF',
      height: '8%',
    },
    indicatorStyle: {
      height: 0,
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
  },
});

tabNavigator.path = '';

export default tabNavigator;
