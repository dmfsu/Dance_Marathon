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


export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      loading: true,
      id: '',
      name: '',
      time: '',
      place: '',
      points: '',
      code: '',
      user_list: '',
      signedIn: false,
    };
  }

componentDidMount = () => {
      fetch('http://elmango.pythonanywhere.com/events/?format=json', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.detail != 'Not found.'){
/*         this.setState({
            id: responseJson.id,
            name: responseJson.name,
            time: responseJson.time,
            place: responseJson.place,
            points: responseJson.points,
            code: responseJson.code,
      //      user_list: responseJson.user_list,            
         })*/
         this.setState({
          events: responseJson
         })
       }
       else{
        this.setState({
          id: '0',
          name: 'guest',
          time: 'N/A',
          place: 'N/A',
          points: 'N/A',
          code: '0',
       //   user_list: 'N/A',
         })
       }
      })
      .catch((error) => {
         console.log('Error');
         this.setState({
          id: '0',
          name: 'guest',
          time: 'N/A',
          place: 'N/A',
          points: 'N/A',
          code: '0',
       //   user_list: 'N/A'
         })
      });
   }

lapsList() {

    return this.state.events.map((data) => {
      return (
        console.log(data.name)
      )
    })

}


  render() {
    return (
      <ScrollView style={styles.container}>
        <Container>
          <Content>

            {this.lapsList()}

            {this.state.events.map((data) => (



            <Card key={data.id}style={{ backgroundColor: '#782F40' }}>
              <CardItem header style={{ backgroundColor: '#782F40' }}>
                <Left><Text style={{ fontSize: 20 }}>{data.name}</Text></Left>
                <Right>
                  <Image style={{ flex: 1, height: 20, width: 60 }}
                  source={ require('../assets/images/gold_star.jpg')}/>
                  <Text> {data.points}    </Text>
                </Right>
              </CardItem>
              <CardItem style={{ backgroundColor: '#782F40'}}>
                <Body>
                    <Image style={styles.pic} source={ require('../assets/images/cardPic.png')}/>
                </Body>
              </CardItem>
              <CardItem footer style={{ backgroundColor: '#CEB888'}}>
                <Left><Text>{data.place}</Text></Left>
                <Right><Text>{data.time}</Text></Right>
              </CardItem>
              <CardItem footer style={{ backgroundColor: '#CEB888'}}>
                <Accordion dataArray={description1}/>
              </CardItem>

            </Card>

          ))}
          
          </Content>
        </Container>
      </ScrollView>
    );
  }
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
