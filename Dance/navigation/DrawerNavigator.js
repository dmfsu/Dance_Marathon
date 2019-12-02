import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MainTabNavigator from './MainTabNavigator';
import LoginHome from '../screens/AuthScreens/Login';
import Profile from '../screens/ProfileScreen';
import SignInScreen from '../screens/AuthScreens/SignIn';
import Classy from '../screens/Classy';
import About from '../screens/About';
import EventsPage from '../screens/EventsPage';

const appDrawerNavigator = createDrawerNavigator({
    Home: Profile,
    Classy: Classy,
    About: About,
    Events: EventsPage,
  },
  {
  	contentOptions: {
  		activeTintColor: '#782F40',
  	}
  }
);

export default appDrawerNavigator;
