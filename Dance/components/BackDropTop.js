import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import Avatar from '../components/Avatar';
import Info from '../components/profileInfo';

/** top of the profile page color */
export default class BackDropTop extends React.Component {
  /** @return {component}*/
  render() {
    return (
      <View style={styles.backDropTop}>
        <View style={styles.icons}>
          <Icon name='menu' style={{fontSize: 35, color: '#CEB888'}} />
        </View>
        <Text style={styles.text}> Jason Santos </Text>
        <Avatar />
        <Info />
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
  icons: {
    flexDirection: 'row',
    flex: 1,
    left: '8%',
    paddingTop: '5%',
  },
});
