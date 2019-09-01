import React from 'react';
import {Platform} from 'react-native';
import {icons} from 'native-base';
import {createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation';
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
  tabBarLabel: 'Events',
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
  tabBarLabel: 'Camera',
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
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    showIcon: true,
    style: {
      backgroundColor: '#782F40',
      height: '9%',
    },
    indicatorStyle: {
      height: 0,
    },
  },
});

tabNavigator.path = '';

export default tabNavigator;
