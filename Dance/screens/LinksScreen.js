import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Body, Icon} from 'native-base';
import { ExpoLinksView } from '@expo/samples';

//name, place, time, date, "points"
//HOME PAGE

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Container>
        <Content>

          <Card style={{ backgroundColor: '#782F40' }}>
            <CardItem header style={{ backgroundColor: '#782F40' }}>
              <Left><Text style={{ fontSize: 20, fontFamily: 'SavoyeLetPlain' }}> First GBM</Text></Left>
              <Right>
                <Image style={{ flex: 1, height: 20, width: 60 }}
                source={ require('../assets/images/gold_star.jpg')}/>
                <Text> 50    </Text>
              </Right>
            </CardItem>
            <CardItem style={{ backgroundColor: '#782F40'}}>
              <Body>
                  <Image style={styles.pic} source={ require('../assets/images/cardPic.png')}/>
              </Body>
            </CardItem>
            <CardItem footer style={{ backgroundColor: '#CEB888'}}>
              <Left><Text>Oglesby Union</Text></Left>
              <Right><Text>9/3 8:00PM - 10:00PM</Text></Right>
            </CardItem>
          </Card>

          <Card style={{ backgroundColor: '#782F40' }}>
            <CardItem header style={{ backgroundColor: '#782F40', fontFamily: 'Chalkboardf' }}>
              <Left><Text style={{ fontSize: 18 }}> Bikes 4Tykes</Text></Left>
              <Right>
                <Image style={{ flex: 1, height: 20, width: 60 }}
                source={ require('../assets/images/gold_star.jpg')}/>
                <Text> 200   </Text>
              </Right>
            </CardItem>
            <CardItem style={{ backgroundColor: '#782F40' }}>
              <Body>
                  <Image style={styles.pic} source={ require('../assets/images/bikes.jpg')}/>
              </Body>
            </CardItem>
            <CardItem footer style={{ backgroundColor: '#CEB888'}}>
              <Left><Text>Landis Green</Text></Left>
              <Right><Text>9/10 4:00PM - 7:00PM</Text></Right>
            </CardItem>

          </Card>

        </Content>
      </Container>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Events',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
