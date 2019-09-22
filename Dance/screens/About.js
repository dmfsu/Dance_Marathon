import React from 'react';
import {Icon, Button, Text} from 'native-base';
import { View, Linking } from 'react-native';

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
        <Text> This is about me </Text>
      </View>  
    </View>
    );
  }
}

export default About;