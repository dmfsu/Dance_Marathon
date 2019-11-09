import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon, Button} from 'native-base';
import Avatar from '../components/Avatar';
import Info from '../components/profileInfo';

/** top of the profile page color */
export default class BackDropTop extends React.Component {
  /** @return {component}*/

  render() {
    return (
      <View style={styles.backDropTop}>
        <View style={styles.button}>
          <Button iconLeft transparent onPress = {this.props.open}>
            <Icon name='menu' style={{fontSize: 35, color: '#CEB888'}} />
          </Button>
          <Button iconLeft transparent onPress = {this.consoleMessage}>
            <Icon name='settings' style={{fontSize: 35, color: '#CEB888'}} />
          </Button>
        </View>
        <Avatar />
        <Text style={styles.text}> {this.props.username} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backDropTop: {
    height: '45%',
    backgroundColor: '#782F40',
  },
  text: {
    alignSelf: 'center',
    fontSize: 28,
    color: 'white',
    paddingTop: '1%',
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginRight: '5%',
    height: '18%',
  },
});
