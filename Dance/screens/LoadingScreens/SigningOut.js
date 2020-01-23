import React from 'react';
import {AsyncStorage, View, Image, StyleSheet} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  Button,
  Text,
} from 'native-base';

import firebase from "../../Firebase";

// Make each screen a class that extends React.Component, its easier to
// work with rather than making them functions.

//sign up: first/last name, organization, email(use the same as )

/** This is a JSDoc comment */
class SigningOut extends React.Component {
  static navigationOptions = {
    header: null,
  };


  componentDidMount(){
    this._signOut();
    setTimeout( () => {
        this.props.navigation.navigate('Dashboard');
    }, 800 );
}

  _signOut = async () => {
    firebase.auth().signOut();
    firebase.auth().onAuthStateChanged(async function(user) {
      if (user) {
        // User is signed in.
      } else {
        // No user is signed in.
        await AsyncStorage.setItem('AuthKey', '0');
      }
    });
  }

  /** @return {screen} */
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.logoView}>
          <Image style={styles.pic}
            source={ require('../../assets/images/white.png')}
          />
          <Text style={styles.message}> Signing Out </Text>
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
  message: {
    alignSelf: 'center', 
    fontSize: 35, 
    color: 'white', 
    fontWeight: 'bold',
    paddingTop: '20%'
  },
});

