import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainTabNavigator from './MainTabNavigator';

const appDrawerNavigator = createDrawerNavigator({
  Dashboard: MainTabNavigator,
});

export default appDrawerNavigator;
