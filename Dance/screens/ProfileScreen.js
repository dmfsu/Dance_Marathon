import React from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Button,
  SafeAreaView} from 'react-native';
import BackDropTop from '../components/BackDropTop';
import BackDropBottom from '../components/BackDropBottom';

/** Profile screen*/
export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  /** @return {screen} */
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.androidBar}></View>
        <Button
          title='Press me'
          onPress = {() => this.props.navigation.openDrawer()}
        />
        <BackDropTop />
        <BackDropBottom />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  androidBar: {
    height: Platform.OS === 'ios'? 0:39,
    backgroundColor: '#782F40',
  },
});


