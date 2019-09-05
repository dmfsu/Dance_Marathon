import React from 'react';
import {View, Image} from 'react-native';

/** @return {avatar} */
export default function Avatar() {
  return (
    <View style={{
      justifyContent: 'center', alignItems: 'center', paddingTop: '1%'}}>
      <Image
        style={{
          width: 150,
          height: 150,
          borderRadius: 150/2,
          marginTop: 20,
          borderColor: 'black',
          borderWidth: 1}}
        source={require('../assets/images/test.png.jpg')}
      />
    </View>
  );
}
