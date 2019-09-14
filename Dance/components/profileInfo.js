import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

/** @return {Component}*/
export default class Info extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.rankView}>
          <Text style={styles.text}>
            Rank:  {this.props.rank}  |   Points:  {this.props.points}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rankView: {
    alignSelf: 'center',
    marginTop: '4%',
    right: '2.5%',
  },
  mainView: {
  },
  pointsView: {
    alignSelf: 'center',
    backgroundColor: 'green',
    marginTop: '9%',
  },
  text: {
    fontSize: 21,
    color: 'white',
    fontWeight: 'bold',
  }
});
