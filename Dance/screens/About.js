import React from 'react';
import axios from 'axios';
import {Icon, Button, Text} from 'native-base';
import { View, Linking, AsyncStorage } from 'react-native';


class About extends React.Component {
  render() {
    return (
    <View>
      <View style={{width: '12%', marginTop: 100}}>
        <Button iconLeft transparent onPress = {() => this.props.navigation.openDrawer()}>
          <Icon name='menu' style={{fontSize: 35, color: '#CEB888'}} />
        </Button>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
        <Button iconLeft transparent onPress = {this.getReq}>
          <Icon name='settings' style={{fontSize: 35, color: '#CEB888'}} />
        </Button>
        <Text> About me page </Text>

      </View>  
    </View>
    );
  }


  getReq = async () => {
  let value = '';
  try {
    value = await AsyncStorage.getItem('AuthKey')
    console.log(value);
  } catch (error) {
    // Error retrieving data
    console.log('nothing');
  }
};


//****
}

export default About;