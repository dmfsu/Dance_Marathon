import React from 'react';
import { AsyncStorage, Text, Button, View, AppRegistry } from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import Avatar from '../components/Avatar';
import ProfileInfo from '../components/profileInfo';


class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
  return(
  	<View>
  		<Avatar></Avatar>
  		<Text style={{alignSelf: 'center', fontSize: 25}}> Jason Santos </Text>
  		<ProfileInfo></ProfileInfo>
  		<Button title="Actually, sign me out :)" onPress={this._signOutAsync} />

  	</View>

  );
}
_signOutAsync = async () => {
		    await AsyncStorage.clear();
		    this.props.navigation.navigate('Auth');
  		};
}

export default ProfileScreen;