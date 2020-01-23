import React from 'react';
import {AsyncStorage, View, Image, StyleSheet} from 'react-native';
import {
  Button,
  Text,
} from 'native-base';

//sign up: first/last name, organization, email(use the same as )

/** This is a JSDoc comment */
class LoginHome extends React.Component {
 
  static navigationOptions = {
    header: null,
  };

  /** @return {screen} */
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.logoView}>
          <Image style={styles.pic}
            source={ require('../../assets/images/white.png')}
          />
        </View>
        <View style={styles.buttonView}>
          <Button large block light rounded onPress={this._signIn}>
            <Text
              style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Sign in
            </Text>
          </Button>
          <Button large block light rounded onPress={this._signUp}>
            <Text
              style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Sign Up
            </Text>
          </Button>
        </View>
      </View>
    );
  }

  // These take you to the sign in and sign up pages repectively 
  _signIn = async () => {
    this.props.navigation.navigate('SignIn');
  };

 _signUp = async () => {
    this.props.navigation.navigate('SignUp');
  };
}

export default LoginHome;

const styles = StyleSheet.create({
  pic: {
    width: 230,
    height: 250,
    alignSelf: 'center',
    marginTop: '32%',
  },
  buttonView: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: '17%',
    marginRight: '15%',
  },
  mainView: {
    backgroundColor: '#782F40',
    flex: 1,
  },
  logoView: {
    flex: 2,
  },
});

