import React from 'react';
import {
  AsyncStorage,
  Text,
  Button,
  Platform,
  View,
  StyleSheet,
  SafeAreaView} from 'react-native';
import Avatar from '../components/Avatar';
import ProfileInfo from '../components/profileInfo';

/** Profile screen*/
class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  /** @return {screen} */
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.androidBar}></View>
        <View style={styles.mainView}>
          <View style={styles.profileTop}>
            <Text style={styles.text}> Jason Santos </Text>
            <Avatar></Avatar>
          </View>
          <View style={styles.info}>
          </View>
        </View>

      </SafeAreaView>
    );
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default ProfileScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#CEB888',
  },
  androidBar: {
    height: Platform.OS === 'ios'? 0:39,
    backgroundColor: '#782F40',
  },
  text: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'white',
    paddingTop: '15%',
    fontWeight: 'bold',
  },
  profileTop: {
    height: '50%',
    backgroundColor: '#782F40',
  },
  info: {
    backgroundColor: '#CEB888',
    flex: 1,
  },
});
