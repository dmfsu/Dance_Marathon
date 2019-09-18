import React from 'react';
import {
  Platform,
  View,
  StyleSheet,
  SafeAreaView} from 'react-native';
import BackDropTop from '../components/BackDropTop';
import BackDropBottom from '../components/BackDropBottom';
import BackDropBottomGuest from '../components/BackDropBottomGuest';

//username, position, "points", organization, 

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      username: '',
      email: '',
      events: '',
      organization: '',
      points: '',
      id: '',
      rank: '',
      signedIn: false,
    };
  }

  componentDidMount = () => {
      fetch('http://elmango.pythonanywhere.com/users/5/?format=json', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.detail != 'Not found.'){
         this.setState({
            username: responseJson.username,
            email: responseJson.email,
            events: responseJson.events,
            organization: responseJson.organization,
            points: responseJson.points,
            id: responseJson,
            rank: 'Member',
            signedIn: true,
         })
       }
       else{
        this.setState({
          username: 'Guest',
          email: 'N/A',
          events: 'N/A',
          organization: 'N/A',
          points: '0',
          id: '0',
          rank: 'Member',
          signedIn: false,
         })
       }
      })
      .catch((error) => {
         console.log('Error');
         this.setState({
          username: 'guest',
          email: 'N/A',
          events: 'N/A',
          organization: 'N/A',
          points: '0',
          id: '0',
          rank: 'Member',
          signedIn: false,
         })
      });
   }

   decideScreen=()=>{
    
      if(this.state.signedIn == true){
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
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.androidBar}></View>
        <BackDropTop 
          open= {() => this.props.navigation.openDrawer()} 
          username= {this.state.username}
          email={this.state.email}
          signedIn= {this.state.signedIn}
          rank= {this.state.rank}
          points= {this.state.points}/>
        {this.decideScreen()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  androidBar: {
    height: Platform.OS === 'ios'? 0:39,
    backgroundColor: '#782F40',
  },
});
