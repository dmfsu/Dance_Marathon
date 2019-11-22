import {createStackNavigator} from 'react-navigation';
import LoginHome from '../screens/AuthScreens/Login';
import SignInScreen from '../screens/AuthScreens/SignIn';
import SignUpScreen from '../screens/AuthScreens/SignUp';

const AuthStack = createStackNavigator(
    {
      Landing: LoginHome,
      SignIn: SignInScreen,
      SignUp: SignUpScreen,
    }
);

AuthStack.path = '';

export default AuthStack;
