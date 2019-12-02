import React from 'react';
import {Icon, Button, Text} from 'native-base';
import { View, Linking, FlatList, StyleSheet} from 'react-native';

class Classy extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#CEB888'}}>
        <View style={styles.buttonView}>
          <Button iconLeft transparent onPress = {() => this.props.navigation.openDrawer()}>
            <Icon name='menu' style={styles.button} />
          </Button>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
          <Button iconLeft transparent onPress={()=>{ Linking.openURL('https://donate.giving.ufhealth.org/campaign/dance-marathon-at-florida-state-university-2020/c231597')}}>
            <Text> Classy Link </Text>
          </Button>
          <Button iconLeft transparent onPress={this.consoleMessage}>
            <Text> Test </Text>
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
  paddingTop: '22%',
  fontSize: 35, 
  color: '#CEB888'
 }
});

export default Classy;