import {createStackNavigator} from 'react-navigation';
import SigningOut from '../screens/LoadingScreens/SigningOut';

const SignOutStack = createStackNavigator(
    {
      SigningOut: SigningOut,
    }
);

SignOutStack.path = '';

export default SignOutStack;
