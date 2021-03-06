import React from 'react';
import axios from 'axios';
import {View, Alert, StyleSheet, AsyncStorage, Image} from 'react-native';
import {
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import firebase from "../../Firebase";

/* The LoginHome is where the user will sign in. Upon a successful
sign in, they are sent to a loading screen at "SigningIn.js" to reload
the profile component. */

export default class SignUp extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props)
    this.state ={
     Username: '',
     Password: '',
     Password2: '',
     Email: '',
     Organization: '',
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.formView}>
          <Form>
            <Item stackedLabel>
              <Label style={{color: 'white', paddingBottom: 10}}>First and Last name</Label>
              <Input 
                style={{color: 'white', fontSize: 20}}
                onChangeText={(text) => this.setState({Username: text})}/>
            </Item>
            <Item stackedLabel>
              <Label style={{color: 'white', paddingBottom: 10}}>Email</Label>
              <Input 
                style={{color: 'white', fontSize: 20}}
                onChangeText={(text) => this.setState({Email: text})}/>
            </Item>
            <Item stackedLabel>
              <Label style={{color: 'white'}}>Password</Label>
              <Input
                secureTextEntry= {true}
                style={{color: 'white', fontSize: 20}}
                onChangeText={(text) => this.setState({Password: text})}
              />
            </Item>
            <Item stackedLabel>
              <Label style={{color: 'white'}}>Re-enter Password</Label>
              <Input
                secureTextEntry= {true}
                style={{color: 'white', fontSize: 20}}
                onChangeText={(text) => this.setState({Password2: text})}
              />
            </Item>
          </Form>
        </View>
        <View style={styles.buttonView}>
          <Button large block light rounded onPress={() => this._signUp()}>
            <Text
              style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Sign Up
            </Text>
          </Button>
          <Button large block light rounded onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Text
              style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Back
            </Text>
          </Button>
        </View>
      </View>
    );
  }

  _signUp = async () => {

    if(this.state.Password === this.state.Password2){
      firebase.auth()
      .createUserWithEmailAndPassword(this.state.Email, this.state.Password)
      .then(function(){
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: this.state.Username,
        }).catch(function(error) {
          // An error happened.
          console.log(error);
        });
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorMessage);
      })
    }
    else{
      console.log("Password Dont match");
    }
}
  
  /*_signUpAsync = async () => {
      var props = this.props;
      
      /* Try to sign in the user. If the username or pass word doesnt work,
      then output an alert message saying to try again  */
      
    /*  axios.post('http://dmapi.pythonanywhere.com/rest-auth/registration/', {
		    "username": this.state.Username,
		    "email": this.state.Email,
		    "password1": this.state.Password,
		    "password2": this.state.Password2,
		    "organization": this.state.Organization,
		})
      .then(function (response) {
      	props.navigation.navigate('LoadinIn');
      })
      .catch(function (response) {
        /* Alert the user if Sign in did not work */
      /*  Alert.alert(
          'Couldn\'t Create User',
          'Please try another password or username',
          [ {text: 'OK'} ],
          {cancelable: false},
        );
        console.log(response.email)
      })
  }*/
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
    backgroundColor: '#CEB888',
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


