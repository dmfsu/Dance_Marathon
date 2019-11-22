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
class SigningIn extends React.Component {
  static navigationOptions = {
    header: null,
  };


  componentDidMount(){
    setTimeout( () => {
        this.props.navigation.navigate('Dashboard');
    }, 800 );
  }


  /** @return {screen} */
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.logoView}>
          <Image style={styles.pic}
            source={ require('../../assets/images/white.png')}
          />
        </View>
      </View>
    );
  }
}

// End of Code basically

export default SigningIn;

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

