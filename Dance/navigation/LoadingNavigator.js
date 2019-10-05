import {createStackNavigator} from 'react-navigation';
import SigningOut from '../screens/SigningOut';


const LoadingStack = createStackNavigator(
    {
      SigningOut: SigningOut,
    }
);

LoadingStack.path = '';

export default LoadingStack;
