import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Left, Button, Body, Icon} from 'native-base';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>Title of Event</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Boom Shaka Laka
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                </Button>
              </Left>
            </CardItem>
         </Card>
         <Card>
            <CardItem header>
              <Text>Title of Event</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Boom Shaka Laka
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                </Button>
              </Left>
            </CardItem>
         </Card>
        </Content>
      </Container>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
