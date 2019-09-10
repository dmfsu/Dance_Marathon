import React from 'react';
import {Icon, Button, Text} from 'native-base';
import { View, Linking } from 'react-native';

class Classy extends React.Component {
  render() {
    return (
    <View>
    <View style={{width: '12%', marginTop: 100}}>
          <Button iconLeft transparent onPress = {() => this.props.navigation.openDrawer()}>
            <Icon name='menu' style={{fontSize: 35, color: '#CEB888'}} />
          </Button>
        </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
        <Button iconLeft transparent onPress={()=>{ Linking.openURL('https://www.classy.org/')}}>
            <Text> Classy Link </Text>
         </Button>
      </View>  
    </View>
    );
  }
}

export default Classy;