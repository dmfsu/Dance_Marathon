import React from 'react';
import axios from 'axios';
import {Icon, Button, Header, Text} from 'native-base';
import { ScrollView, View, Linking, AsyncStorage } from 'react-native';


class About extends React.Component {
  render() {
    return (
    <View>
      <View style={{width: '12%', marginTop: 100}}>
        <Button iconLeft transparent onPress = {() => this.props.navigation.openDrawer()}>
          <Icon name='menu' style={{fontSize: 35, color: '#CEB888'}} />
        </Button>
      </View>
      <ScrollView style={{ backgroundColor: '#CEB888' }}>
        <Header style={{ backgroundColor: '#782F40' }}>
          <Text style={{ fontSize: 40 }}>Our Story</Text>
        </Header>
        <Text>
              Dance Marathon at Florida State University holds an annual 40-hour event where more than 1,800 
          students stay awake and on their feet to raise money and awareness for our local beneficiaries.
          Our mission is For the Kids with a commitment to raising funds for children in need of specialized 
          pediatric and medical care that otherwise are not available to them locally. Dance Marathon at FSU, 
          the largest student-run philanthropy in the southeastern region of the United States, benefits our 
          local Children’s Miracle Network hospital, Shands Children’s Hospital, and the FSU College of Medicine
          Pediatric Outreach Programs. We are one of the five founding Miracle Network Dance Marathons in the country!
        </Text>
        <Header style={{ backgroundColor: '#782F40' }}>
          <Text style={{ fontSize: 40 }}>Our Marathon</Text>
        </Header>
        <Text>
              The 40-hour event is split into two 20-hour shifts (Garnet and Gold), where dancers 
          commit to being on their feet for 20 hours, standing for those who can’t. Dancers, 
          volunteers, and local community members are inspired by local performing artists and 
          student groups, sponsored theme hour activities, and by meeting local miracle families 
          who have been directly affected by the funds raised through events like Dance Marathon
          at FSU and have been treated at our local Children’s Miracle Network Hospital. In addition 
          to the 40-hour marathon, Dance Marathon at FSU hosts additional events throughout the year. 
          Our mission is a year-long effort and a year-long celebration!
        </Text>
        <Header style={{ backgroundColor: '#782F40' }}>
          <Text>Funds Raised by DM at FSU</Text>
        </Header>
        <Text>
              Dance Marathon at FSU is committed to making a difference in our community, $1 at a time. In 2019, Dance 
          Marathon at FSU raised a grand total of $2,210,165.21 and since our inception in 1995, nearly $10 million 
          For the Kids. The funds raised make the difference in providing the medical care, treatment, and research 
          needed at Shands Children’s Hospital, our local Children’s Miracle Network Hospital and the FSU College of Medicine.
        </Text>
      </ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
        <Button iconLeft transparent onPress = {this.getReq}>
          <Icon name='settings' style={{fontSize: 35, color: '#CEB888'}} />
        </Button>
        <Text> About me page </Text>
      </View>  
    </View>
    );
  }


  getReq = async () => {
  let value = '';
  try {
    value = await AsyncStorage.getItem('AuthKey')
    console.log(value);
  } catch (error) {
    // Error retrieving data
    console.log('nothing');
  }
};


//****
}

export default About;