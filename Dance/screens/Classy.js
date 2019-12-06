import React from 'react';
import {Icon, Button, Text} from 'native-base';
import { View, Linking, FlatList, StyleSheet} from 'react-native';
import { Notifications } from 'expo';

class Classy extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#CEB888'}}>
        <View style={styles.buttonView}>
          <Button iconLeft transparent onPress = {() => this.props.navigation.openDrawer()}>
            <Icon name='menu' style={styles.button} />
          </Button>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '20%' }}>
          <Button iconLeft transparent onPress={()=>{ Linking.openURL('https://donate.giving.ufhealth.org/campaign/dance-marathon-at-florida-state-university-2020/c231597')}}>
            <Text style={{color: 'white'}}> Login to Classy </Text>
          </Button>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '20%' }}>
          <Button iconLeft transparent onPress={()=>{ Linking.openURL('https://donate.giving.ufhealth.org/campaign/dance-marathon-at-florida-state-university-2020/c231597')}}>
            <Text style={{color: 'white'}}> Login to Classy </Text>
          </Button>
        </View>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
 buttonView: {
  height: '20%', 
 },
 button: {
  paddingTop: '25%',
  fontSize: 35, 
  color: 'white'
 }
});

export default Classy;