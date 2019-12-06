import React from 'react';
import {
  Platform,
  AsyncStorage,
  View,
  StyleSheet,
  SafeAreaView} from 'react-native';
import BackDropTop from '../components/BackDropTop';
import BackDropBottom from '../components/BackDropBottom';
import BackDropBottomGuest from '../components/BackDropBottomGuest';
import * as SecureStore from 'expo-secure-store';

//Class rather than a function to make use of state variables

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
//Admin Account 
//username: admin
//password: puppiesids123

  //The only state variable is Signed in to tell which screen to display
  constructor(props){
    super(props)
    this.state ={
      signedIn: null,
      username: 'Guest'
    }
  }

  //Changes the look of the profile screen depending on if the user
  //is signed in or not
  componentDidMount(){
    this._retrieveData()
  }

  _retrieveData = async () => {
    let value = '';
  try {
    value = await AsyncStorage.getItem('AuthKey');
    if (value !== '0') {
        this.setState({
          signedIn: true,
          username: "jason"
        })
    }
    else{
        this.setState({signedIn: false})
    }
  } catch (error) {
    // Error retrieving data
    console.log('Couldn\'t read AuthKey');
  }
};


  showGuest(){
    return(
        <BackDropBottomGuest signIn= {() => this.props.navigation.navigate('SignIn')} 
        signUp= {() => this.props.navigation.navigate('SignUp')} />
      )
  }

  decideScreen(){
      if(this.state.signedIn === true){
        return (
            <BackDropBottom signOutNav = {() => this.props.navigation.navigate('Loading')} />
          )
      }
      else {
        return (
            <BackDropBottomGuest signIn= {() => this.props.navigation.navigate('SignIn')} 
            signUp= {() => this.props.navigation.navigate('SignUp')}/>
          )
      }
   }


  render() {
    //Returns what is shown on the screen
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.androidBar}></View>
        <BackDropTop 
          open= {() => this.props.navigation.openDrawer()} 
          username = {this.state.username}/>        
        {this.decideScreen()}
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  //Style for the android bar, needs work
  androidBar: {
    height: Platform.OS === 'ios'? 0:39,
    backgroundColor: '#782F40',
  },
});
