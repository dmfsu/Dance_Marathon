import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import AuthStack from './AuthStack';
import appDrawerNavigator from './DrawerNavigator';
import LoadingStack from './LoadingNavigator';

export default createAppContainer(
    createSwitchNavigator({
      Auth: AuthStack,
      Dashboard: appDrawerNavigator,
      Loading: LoadingStack,
    },
    {
      initialRouteName: 'Dashboard',
    })
);
