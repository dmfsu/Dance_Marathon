import {createStackNavigator} from 'react-navigation';
import LoginHome from '../screens/Login';
import SignInScreen from '../screens/SignIn';

const AuthStack = createStackNavigator(
    {
      Landing: LoginHome,
      SignIn: SignInScreen,
    }
);

AuthStack.path = '';

export default AuthStack;
