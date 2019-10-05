import React from 'react';
import {Icon, Button, Text} from 'native-base';
import {View, StyleSheet, AsyncStorage} from 'react-native';

/** top of the profile page color */
export default class BackDropBottom extends React.Component {

  leave(){
    this.props.signOutNav;
  }

  /** @return {component}*/
  render() {
    return (
      <View style={styles.backDropBottom}>
        <View style={styles.button}>
          <Button large block light rounded 
          style={{backgroundColor: '#782F40'}}
          onPress={this.props.signOutNav}>
            <Text style={{color: 'white'}}> Sign Out </Text>
          </Button>
        </View>  
      </View>
    );
  }

     _signOut = async () => {
    try {
      await AsyncStorage.removeItem('signedIn');
      await AsyncStorage.setItem('signedIn', 'false');
      this.props.signOutNav;
    } catch (error) {
      console.log('Couldnt sign out')
    }
  };
}



const styles = StyleSheet.create({
  backDropBottom: {
    height: '54%',
    backgroundColor: '#CEB888',
  },
  text: {
    alignSelf: 'center',
    fontSize: 28,
    color: 'white',
    paddingTop: '10%',
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginLeft: '9%',
    marginRight: '9%',
    alignItems: 'center',
    marginBottom: '20%',
  }
});
