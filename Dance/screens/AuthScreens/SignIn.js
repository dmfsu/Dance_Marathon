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

/* The LoginHome is where the user will sign in. Upon a successful
sign in, they are sent to a loading screen at "SigningIn.js" to reload
the profile component. */

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props)
    this.state ={
     Username: '',
     Password: '',
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.formView}>
          <Form>
            <Item stackedLabel>
              <Label style={{color: 'white', paddingBottom: 10}}>Email</Label>
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
          <Button large block light rounded onPress={() => this._signInAsync()}>
            <Text
              style={{color: 'black', fontWeight: 'bold', fontSize: 15}}>
              Sign in
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


  //Email:  email@email.com
  //Passwprd: fake123account

  _signInAsync = async () => {
      var props = this.props;
      
      /* Try to sign in the user. If the username or password doesnt work,
      then output an alert message saying to try again  */

      axios.post('http://dmapi.pythonanywhere.com/rest-auth/login/', {
        email: 'email@email.com',//this.state.Username , 
        password: 'fake123account'//this.state.Password,
      })
      .then(async function (response) {
        try {
        /* Store variables for whole app */
          console.log(response.data)
          await AsyncStorage.setItem('AuthKey', JSON.stringify(response.data.key));          
          await AsyncStorage.setItem('id', JSON.stringify(response.data.user.id));
          await AsyncStorage.setItem('email', JSON.stringify(response.data.user.email));
          //Currently not passing these when we sign in
          //await AsyncStorage.setItem('username', JSON.stringify(response.data.user.username));
          //await AsyncStorage.setItem('points', JSON.stringify(response.data.user.points));
          //await AsyncStorage.setItem('organization', JSON.stringify(response.data.user.organization));
        }catch{
          console.log("Error Storing data")
        }
        props.navigation.navigate('LoadingIn');
      })
      .catch(function () {
        /* Alert the user if Sign in did not work */
        Alert.alert(
          'Couldn\'t Sign In',
          'The email or password you entered is invalid. Please try again.',
          [ {text: 'OK'} ],
          {cancelable: false},
        );
      })
  }
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


