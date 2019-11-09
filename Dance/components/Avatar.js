import React from 'react';
import {Image} from 'react-native';

/** @return {avatar} */
export default function Avatar() {
  return (
    <Image
      style={{
        width: 125,
        height: 125,
        borderRadius: 150/2,
        resizeMode: 'cover',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        alignSelf: 'center'}}
      source={require('../assets/images/test.png.jpg')}
    />
  );
}