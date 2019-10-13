import React from 'react';
import axios from 'axios';
import {View, StyleSheet, AsyncStorage, Image} from 'react-native';
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

export default class LoginHome extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props)
    this.state ={
     Username: '',
     Password: '',
     AKey: '',
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.formView}>
          <Form>
            <Item stackedLabel>
              <Label style={{color: 'white', paddingBottom: 10}}>Username</Label>
              <Input 
                style={{color: 'white', fontSize: 20}}
                onChangeText={(text) => this.setState({Username: text})}/>
            </Item>
            <Item stackedLabel>
              <Label style={{color: 'white'}}>Password</Label>
              <Input
                secureTextEntry= {true}
                style={{color: 'white', fontSize: 20}}
                onChangeText={(text) => this.setState({Password: text})}
              />
            </Item>
          </Form>
        </View>
        <View style={styles.buttonView}>
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

  _signInAsync = async () => {
  try {
    //***********************
      axios.post('http://elmango.pythonanywhere.com/rest-auth/login/', {
      email: 'lucas@gmail.us',
      password: 'puppies123'
    })
    .then(async function (response) {
          try{
            await AsyncStorage.setItem('AuthKey', response.data.key)
          }catch(error){
            console.log("Key Error");
          }   
    })
    .catch(function (error) {
      console.log("Sorry, this user doesn't exist!");
    });
  //*******************************

    try {
      value = await AsyncStorage.getItem('AuthKey');
      if(value !== '0'){
        this.props.navigation.navigate('SigningIn');
      }
    } catch (error) {
      // Error retrieving data
      console.log('nothing');
    }

  } catch (error) {
    console.log('Could not sign in')
  }
};

}

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
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoView: {
    flex: 2,
  },
  formView: {
    marginTop: '40%',
    marginBottom: '10%',
  },
});


