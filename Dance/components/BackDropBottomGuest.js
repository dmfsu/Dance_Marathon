import React from 'react';
import {Icon, Button, Text} from 'native-base';
import {View, StyleSheet} from 'react-native';

/** top of the profile page color */
export default class BackDropBottomGuest extends React.Component {
  /** @return {component}*/
  render() {
    return (
      <View style={styles.backDropBottom}>
        <View style={styles.buttons}>
          <Button large block light rounded 
          style={{backgroundColor: '#782F40'}}
          onPress={this.props.signIn}>
            <Text style={{color: 'white'}}> Sign In </Text>
          </Button>
          <Button large block light rounded style={{backgroundColor: '#782F40'}}
          onPress={this.props.signUp}>
            <Text style={{color: 'white'}}> Sign Up </Text>
          </Button>
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backDropBottom: {
    height: '54%',
    backgroundColor: '#CEB888',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 28,
    color: 'white',
    paddingTop: '10%',
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginLeft: '9%',
    marginRight: '9%',
    alignItems: 'center',
    marginBottom: '20%',
  }
});
