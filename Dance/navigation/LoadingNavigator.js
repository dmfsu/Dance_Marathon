import {createStackNavigator} from 'react-navigation';
import SigningOut from '../screens/SigningOut';
import SigningIn from '../screens/SigningIn';


const LoadingStack = createStackNavigator(
    {
      SigningOut: SigningOut,
      SigningIn: SigningIn,
    }
);

LoadingStack.path = '';

export default LoadingStack;
