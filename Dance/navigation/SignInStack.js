import {createStackNavigator} from 'react-navigation';
import SigningIn from '../screens/LoadingScreens/SigningIn';


const SignInStack = createStackNavigator(
    {
      SigningIn: SigningIn,
    }
);

SignInStack.path = '';

export default SignInStack;
