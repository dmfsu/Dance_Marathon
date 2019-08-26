import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import Avatar from '../components/Avatar';
import ProfileInfo from '../components/profileInfo';


export default function SettingsScreen() {
  
  return(
  	<View>
  		<Avatar></Avatar>
  		<Text style={{alignSelf: 'center', fontSize: 25}}> Jason Santos </Text>
  		<ProfileInfo></ProfileInfo>
  	</View>

  );
}

SettingsScreen.navigationOptions = {
  title: 'Profile',
};
