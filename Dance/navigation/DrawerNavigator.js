import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainTabNavigator from './MainTabNavigator';
import LoginHome from '../screens/Login';
import SignInScreen from '../screens/SignIn';
import Classy from '../screens/Classy';

const appDrawerNavigator = createDrawerNavigator({
    Home: MainTabNavigator,
    SignIn: SignInScreen,
    Classy: Classy,
  },
  {
	contentOptions: {
		activeTintColor: '#782F40',
	}
  }
);

export default appDrawerNavigator;
