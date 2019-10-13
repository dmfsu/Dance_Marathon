import React from 'react';
import { Modal, ScrollView, Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Left, Right, Button, Body, Icon, Accordion, Input, Item} from 'native-base';
import { ExpoLinksView } from '@expo/samples';

const description1 =[
            { title: "More:", content: "blah" }
];


export default class EventsPage extends React.Component {
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
      modalState: false
    };
  }


  setMyModalState(){
    this.setState({modalState: true});
  }

componentDidMount = () => {
      fetch('http://elmango.pythonanywhere.com/events/?format=json', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.detail != 'Not found.'){
    /*      this.setState({
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
        console.log('worked')
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
                <CardItem style={{ backgroundColor: '#cEB888' }}>
                  <Item rounded style={{ backgroundColor: '#000000' }}>
                    <Input placeholder='Regular Textbox' />
                  </Item>
                </CardItem>
                <CardItem style={{ backgroundColor: '#cEB888' }}>
                    <Button full dark style={{ width: '100%', backgroundColor: '#782F40' }} 
                              onPress={() => console.log("button press!")}>
                      <Text>Check In</Text>
                  </Button>
                </CardItem>
              </Card>
              //onPress={() => this.setMyModalState(true)}>

          ))}
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

EventsPage.navigationOptions = {
  title: 'Events',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
