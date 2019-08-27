import React from 'react';
import { AsyncStorage, View, Image, StyleSheet} from 'react-native';
import { Container, Header, Button, Text, Content, Form, Item, Input, Label } from 'native-base';
class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

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
              <Input secureTextEntry= {true} style={{color: 'white', fontSize: 20}}/>
            </Item>
          </Form>
        <View style={styles.button}>
          <Button large block light rounded onPress={this._signInAsync}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15}}> Sign in</Text>
          </Button>
        </View>
      </View>
    );
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
}

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
    marginTop: 32
  },
  back: {
    backgroundColor: '#782F40',
    height: '100%'
  }
});