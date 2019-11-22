import React from 'react';
import {Icon, Button, Text} from 'native-base';
import {View, StyleSheet, ScrollView, AsyncStorage} from 'react-native';

/** top of the profile page color */
export default class BackDropBottom extends React.Component {

  leave(){
    this.props.signOutNav;
  }

  /** @return {component}*/
  render() {
    return (
      <ScrollView style={styles.backDropBottom}>
        <View style={styles.button}>
          <Button large block light rounded 
            style={{backgroundColor: '#782F40'}}
            onPress={this.props.signOutNav}>
            <Text style={{color: 'white'}}> Sign Out </Text>
          </Button>
        </View>
        <View>
        </View>  
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  backDropBottom: {
    flex: 1,
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
    alignSelf: 'center',
    marginTop: 20,
  }
});
