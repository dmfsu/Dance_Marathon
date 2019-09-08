import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import AuthStack from './AuthStack';
import appDrawerNavigator from './DrawerNavigator';

export default createAppContainer(
    createSwitchNavigator({
      Auth: AuthStack,
      Dashboard: appDrawerNavigator,
    },
    {
      initialRouteName: 'Dashboard',
    })
);
