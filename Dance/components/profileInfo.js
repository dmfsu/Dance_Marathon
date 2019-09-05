import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

/** @return {Component}*/
export default function Avatar() {
  return (
    <View style={styles.mainView}>
      <View style={styles.rankView}>
        <Text style={{fontSize: 21, color: 'white', fontWeight: 'bold'}}>
        Rank: Captain  |  Points: 200
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rankView: {
    alignSelf: 'center',
    marginTop: '9%',
    right: '2.5%',
  },
  mainView: {
  },
  pointsView: {
    alignSelf: 'center',
    backgroundColor: 'green',
    marginTop: '9%',
  },
});
