import React from 'react';
import {AsyncStorage, View, Image, StyleSheet} from 'react-native';
import {
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

// Make each screen a class that extends React.Component, its easier to
// work with rather than making them functions.

/** This is a JSDoc comment */
class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  /** @return {screen} */
  render() {
    return (
      <View style={styles.back}>
        <Image style={styles.pic}
          source={ require('../assets/images/white.png')}
        />
        <Form>
          <Item stackedLabel>
            <Label style={{color: 'white', paddingBottom: 10}}>Username</Label>
            <Input style={{color: 'white', fontSize: 20}} />
          </Item>
          <Item stackedLabel>
            <Label style={{color: 'white'}}>Password</Label>
            <Input
              secureTextEntry= {true}
              style={{color: 'white', fontSize: 20}}
            />
          </Item>
        </Form>
        <View style={styles.button}>
          <Button large block light rounded onPress={this._signInAsync}>
            <Text
              style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Sign in
            </Text>
          </Button>
        </View>
      </View>
    );
  }

  // This is what authenticates the sign in
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
}

// End of Code basically

export default SignInScreen;

const styles = StyleSheet.create({
  pic: {
    width: 230,
    height: 250,
    alignSelf: 'center',
    marginTop: '32%',
  },
  button: {
    width: 90,
    alignSelf: 'center',
    marginTop: 32,
  },
  back: {
    backgroundColor: '#782F40',
    height: '100%',
  },
});

/* Things to add:
-> Feature to move input so you can see what you type
-> Nicer button
-> May switch to different authentication (Facebook/Google)
-> Guest option
*/
