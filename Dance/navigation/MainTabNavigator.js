import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ProfileScreen from '../screens/ProfileScreen';


const HomeStack = createStackNavigator(
    {
      Home: HomeScreen,
    },
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Fundraising',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focuse = { focused }
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
    {
      Links: LinksScreen,
    },
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

LinksStack.path = '';

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
  HomeStack,
  LinksStack,
  ProfileStack,
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    showIcon: true,
    style: {
      backgroundColor: '#EEEEEE',
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
