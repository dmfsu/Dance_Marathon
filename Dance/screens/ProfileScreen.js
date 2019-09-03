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
        <View style={styles.androidBar}>
        </View>
        <View style={styles.mainView}>
          <Avatar></Avatar>
          <Text style={styles.text}> Jason Santos </Text>
          <ProfileInfo></ProfileInfo>
          <Button title='sign me out' onPress={this._signOutAsync} />
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
    backgroundColor: 'white',
  },
  androidBar: {
    height: Platform.OS === 'ios'? 0:39,
    backgroundColor: 'white',
  },
  text: {
    alignSelf: 'center',
    fontSize: 25,
  },
});
