import React from 'react';

import { Alert, AsyncStorage, View, Modal, ScrollView, Image, StyleSheet, TextInput } from 'react-native';

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
      modalVisible: false,
      buttonToggle: true,
      FLAG: 0,
      flagEVENT: -1,
      lat: null,
      lng: null,
      watchID: null,
      geoFenceFlag: 0,
      codeEntered: ''
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

getUserID = async (d) => {
   try {
     let userID = await AsyncStorage.getItem('id')
     let userPoints = await AsyncStorage.getItem('points');

     this.setState({ id: userID })
     this.setState({ points: userPoints })

     if(userID != '-1'){
       this.setState({
         signedIn: true
       })
     }
   } 
   catch (error) {
     console.log(error)
   }
   
   this.openModal(d)
 
 }

openModal = async(e) => {
  if(this.state.signedIn == true){
     this.setState({modalVisible:true, checkCode: e});
     this.state.modalVisible = true;
  }
  else{
     Alert.alert("Guests can not check into events. Please sign in")
  }
}

closeModal(){
  this.setState({modalVisible:false});
  this.state.modalVisible = false;
}


changeText(x){
  this.setState({codeEntered:x});
}


addPoints(pointsToAdd){
  let totalPoints = +this.state.points + +pointsToAdd
  console.log("Points added, current points: " + totalPoints)
}

//alerts and modals not currently working well together
alertUser(flagValue){

  if(flagValue == 1){
    Alert.alert("Successful Checkin.")
  }
  else{
    Alert.alert("Unsuccessful Checkin.")
  }

}

//will be toggling buttons to unclickable upon successful checkin
toggleStatus(){
  this.setState({buttonToggle:!this.state.buttonToggle})
}

changeFlagEvent(val){
  this.setState({ flagEVENT: val })
}


GEOLOCATE(){

  navigator.geolocation.getCurrentPosition(this.geoSuccess);

    console.log("Initial latitude: " + this.state.lat);
    console.log("Initial longitude: " + this.state.lng);

  this.setState({ geoFenceFlag: 1 })

}

geoSuccess = (position) => {

  this.setState({
    lat: position.coords.latitude,lng:position.coords.longitude 
  })

  console.log("Final latitude: " + this.state.lat);
  console.log("Final longitude " + this.state.lng);

}

  render() {
    return (
      <ScrollView style={styles.container}>
        <Container>
          <Content>
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
                  {!this.state.buttonToggle && this.state.flagEVENT == (data.id) ? (
                      <Button full dark style={{ width: '100%', backgroundColor: '#000000' }}>
                      <Text>Successful Check In</Text>
                    </Button>                 
                  ) : (
                    <Button full dark style={{ width: '100%', backgroundColor: '#782F40' }} 
                                onPress={() => this.getUserID(data.code) }>
                        <Text>Check In {data.id}</Text>
                      </Button>  
                  )}


                </CardItem>
                
                  <View style={styles.container}>
                 <Modal
                  visible={this.state.modalVisible}
                  animationType={'slide'}
                  onRequestClose={() => this.closeModal()}
                 >
                <View style={styles.modalContainer}>
                  <View style={styles.innerContainer}>
                      <TextInput style={{ height: 40, width: '90%', borderWidth: 2, backgroundColor: '#FFFFFF' }}
                        placeholder="Enter Code"
                        placeholderTextColor = "#000000"
                        onChangeText={(codeEntered) => this.changeText(codeEntered)}/>
                      <Button style={{ backgroundColor: '#782F40', top:10 }}
                        onPress={() => {this.closeModal(); 
                            if((this.state.codeEntered) === this.state.checkCode){
                              //updatePoints();
                              this.GEOLOCATE()
                              this.changeFlagEvent(data.id)
                              this.toggleStatus();

                              //if they are within range of the event
                              if(this.state.geoFenceFlag == 1){
                                this.addPoints(data.points);
                              }
                              //if they aren't no points
                              else{
                                console.log("Points NOT added.");
                                console.log("Must be in range of event location.");
                              }

                              //reset the flag
                              this.setState({ geoFenceFlag: 0 })
                            }
                            else{
                              //error()
                            }

                          }}>
                        <Text>Submit</Text>
                        </Button>
                          <Button style={{ backgroundColor: '#782F40', top:250,left:1,right:1 }}
                          onPress = {() => this.closeModal()}>
                          <Text>Back</Text>
                          </Button>
                    </View>
                  </View>
                </Modal>
               </View>

              </Card>

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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#CEB888',
  },
  innerContainer: {
    alignItems: 'center',
  },

});
