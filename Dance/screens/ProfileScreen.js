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
  
  //The only state variable is Signed in to tell which screen to display
  constructor(props){
    super(props)
    this.state ={
      signedIn: null,
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
    value = await AsyncStorage.getItem('signedIn');
    if (value !== null) {
      if(value !== 'false'){
        this.setState({signedIn: true});
      }
      else{
        this.setState({signedIn: false})
      }
    }
  } catch (error) {
    // Error retrieving data
    console.log('nothing');
  }
};

  showGuest(){
    return(
        <BackDropBottomGuest signIn= {() => this.props.navigation.navigate('SignIn')} />
      )
  }

  decideScreen(){
      if(this.state.signedIn === true){
        return (
            <BackDropBottom />
          )
      }
      else {
        return (
            <BackDropBottomGuest signIn= {() => this.props.navigation.navigate('SignIn')} />
          )
      }
   }


  /** @return {screen} */
  render() {

    //All of the variables I am getting from the sign in page, passed
    //as params. These are not state variables. 
    const email= this.props.navigation.getParam('email', 'N/A');
    const events= this.props.navigation.getParam('events', 'None');
    const organization= this.props.navigation.getParam('organization', 'None');
    const points= this.props.navigation.getParam('points', '0');
    const id= this.props.navigation.getParam('id', '0');

    //Returns what is shown on the screen
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.androidBar}></View>
        <BackDropTop 
          open= {() => this.props.navigation.openDrawer()} 
          username= {'jason'}
          email={email}
          rank= {this.props.navigation.getParam('rank', 'Guest')}
          points= {points}/>
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
