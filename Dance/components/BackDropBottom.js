import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

/** top of the profile page color */
export default class BackDropBottom extends React.Component {
  /** @return {component}*/
  render() {
    return (
      <View style={styles.backDropBottom}>

      </View>
    );
  }
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
});
