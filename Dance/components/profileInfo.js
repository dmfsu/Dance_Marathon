import React from 'react';
import { Text, View, Image} from 'react-native';
import { Container, Header, Content, List, ListItem, Separator } from 'native-base';

export default function ProfileInfo() {
  return (
  	<View style= {{alignContent: 'flex-start'}} >
          <Separator bordered>
            <Text>Username</Text>
          </Separator>
          <ListItem>
            <Text>Caroline</Text>
          </ListItem>
          <Separator bordered>
            <Text>Position</Text>
          </Separator>
          <ListItem>
            <Text>Captain</Text>
          </ListItem>
    </View>
  );
}