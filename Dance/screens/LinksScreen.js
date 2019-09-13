import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Body, Icon, Accordion} from 'native-base';
import { ExpoLinksView } from '@expo/samples';

const description1 = [
  { title: "More:", content: "First General Body Meeting to go over basic details of Dance Marathon this semester, upcoming events, and more." }
];

const description2 = [
  { title: "More:", content: "Bikes4Tykes is a charity event that helps provide bikes for underpriveleged kids. They collect donations to purchase bicycles and helmets for donation to Toys For Tots and The Salvation Army at Christmas time." }  
];

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Container>
        <Content>
          <Card style={{ backgroundColor: '#782F40' }}>
            <CardItem header style={{ backgroundColor: '#782F40' }}>
              <Left><Text style={{ fontSize: 20, fontFamily: 'SavoyeLetPlain' }}> pewpew</Text></Left>

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
            <CardItem footer style={{ backgroundColor: '#CEB888'}}>
              <Accordion dataArray={description1}/>
            </CardItem>


          </Card>

          <Card style={{ backgroundColor: '#782F40' }}>
            <CardItem header style={{ backgroundColor: '#782F40', fontFamily: 'ChalkboardSELight' }}>

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
            <CardItem footer style={{ backgroundColor: '#CEB888'}}>
              <Accordion dataArray={description2}/>
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
