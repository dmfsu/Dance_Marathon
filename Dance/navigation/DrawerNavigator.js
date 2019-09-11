import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainTabNavigator from './MainTabNavigator';
import LoginHome from '../screens/Login';
import SignInScreen from '../screens/SignIn';
import Classy from '../screens/Classy';
import About from '../screens/About';
import LinksScreen from '../screens/LinksScreen';

const appDrawerNavigator = createDrawerNavigator({
    Home: MainTabNavigator,
    Classy: Classy,
    About: About,
    Events: LinksScreen,
  },
  {
  	contentOptions: {
  		activeTintColor: '#782F40',
  	}
  }
);

export default appDrawerNavigator;
