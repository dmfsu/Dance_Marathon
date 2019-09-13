import React from 'react';
import {AsyncStorage, View, Image, StyleSheet} from 'react-native';
import {
  Button,
  Text,
} from 'native-base';

// Make each screen a class that extends React.Component, its easier to
// work with rather than making them functions.

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
            source={ require('../assets/images/white.png')}
          />
        </View>
        <View style={styles.buttonView}>
          <Button large block light rounded onPress={this._signInAsync}>
            <Text
              style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Sign in
            </Text>
          </Button>
          <Button large block light rounded onPress={this._signInAsync}>
            <Text
              style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Sign Up
            </Text>
          </Button>
        </View>
      </View>
    );
  }

  // This is what authenticates the sign in
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('SignIn');
  };
}

// End of Code basically

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

/* Things to add:
-> Feature to move input so you can see what you type
-> Nicer button
-> May switch to different authentication (Facebook/Google)
-> Guest option
*/
