import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import AuthStack from './AuthStack';
import appDrawerNavigator from './DrawerNavigator';
import SignInStack from './SignInStack';
import SignOutStack from './SignOutStack';

export default createAppContainer(
    createSwitchNavigator({
      Auth: AuthStack,
      Dashboard: appDrawerNavigator,
      LoadingIn: SignInStack,
      LoadingOut: SignOutStack,
    },
    {
      initialRouteName: 'Dashboard',
    })
);
