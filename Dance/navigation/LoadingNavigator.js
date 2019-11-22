import {createStackNavigator} from 'react-navigation';
import SigningOut from '../screens/LoadingScreens/SigningOut';
import SigningIn from '../screens/LoadingScreens/SigningIn';


const LoadingStack = createStackNavigator(
    {
      SigningOut: SigningOut,
      SigningIn: SigningIn,
    }
);

LoadingStack.path = '';

export default LoadingStack;
