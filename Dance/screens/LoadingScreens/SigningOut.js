import React from 'react';
import {AsyncStorage, View, Image, StyleSheet} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  Button,
  Text,
} from 'native-base';

// Make each screen a class that extends React.Component, its easier to
// work with rather than making them functions.

//sign up: first/last name, organization, email(use the same as )

/** This is a JSDoc comment */
class SigningOut extends React.Component {
  static navigationOptions = {
    header: null,
  };


  componentDidMount(){
    setTimeout( () => {
        this._signOut();
        this.props.navigation.navigate('Dashboard');
    }, 800 );
}

  _signOut = async () => {
    try {
      await AsyncStorage.setItem('id', '-69')
      await AsyncStorage.setItem('AuthKey', '0');

    } catch (error) {
      console.log('Couldnt sign out')
    }
  }

  /** @return {screen} */
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.logoView}>
          <Image style={styles.pic}
            source={ require('../../assets/images/white.png')}
          />
          <Text> Signing Out, please be patiet </Text>
        </View>
      </View>
    );
  }
}

// End of Code basically

export default SigningOut;

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

