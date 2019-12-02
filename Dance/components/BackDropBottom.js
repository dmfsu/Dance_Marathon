import React from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Button } from 'native-base';
import {View, StyleSheet, ScrollView, AsyncStorage} from 'react-native';

/** top of the profile page color */
export default class BackDropBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      organization: '',
      points: '',
    };

  }

  leave(){
    this.props.signOutNav;
  }

  _getData = async () => {
    try {
      this.setState({
        name: await AsyncStorage.getItem('username'),
        organization:  await AsyncStorage.getItem('organization'), 
        points:  await AsyncStorage.getItem('points'),
      })
    } catch (error) {
      console.log('Couldnt sign out')
    }
  }

  /** @return {component}*/
  render() {
    return (
      <ScrollView style={styles.backDropBottom}>
        <View style={styles.button}>
          <Button large block light rounded 
            style={{backgroundColor: '#782F40'}}
            onPress={this.props.signOutNav}>
            <Text style={{color: 'white'}}> Sign Out </Text>
          </Button>
        </View>
        <View style={styles.cards}>
          <Card>
            <CardItem header style={{alignSelf: 'center'}}>
              <Text style={styles.header}>Personal Stats</Text>
            </CardItem>
            <CardItem>
              <Body>
              <View style={styles.cardBody}>
                <Text style = {styles.label}>
                   Organization: 
                </Text>
                <Text style={styles.data}>
                  {this.state.organization}
                </Text>
              </View>
              <View style={styles.cardBody}>
                <Text style = {styles.label}>
                   Points: 
                </Text>
                <Text style={styles.data}>
                  {this.state.points}
                </Text>
              </View>
              <View style={styles.cardBody}>
                <Text style = {styles.label}>
                   Money Raised: 
                </Text>
                <Text style={styles.data}>
                  $2,560
                </Text>
              </View>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header style={{alignSelf: 'center'}}>
              <Text style={styles.header}>Group Stats</Text>
            </CardItem>
            <CardItem>
              <Body>
              <View style={styles.cardBody}>
                <Text style = {styles.label}>
                   Organization: 
                </Text>
                <Text style={styles.data}>
                  {this.state.organization}
                </Text>
              </View>
              <View style={styles.cardBody}>
                <Text style = {styles.label}>
                   Points: 
                </Text>
                <Text style={styles.data}>
                  420
                </Text>
              </View>
              <View style={styles.cardBody}>
                <Text style = {styles.label}>
                   Money Raised: 
                </Text>
                <Text style={styles.data}>
                  $2,560
                </Text>
              </View>
              </Body>
            </CardItem>
          </Card>
        </View>

      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  backDropBottom: {
    flex: 1,
    backgroundColor: '#CEB888',
  },
  text: {
    alignSelf: 'center',
    fontSize: 28,
    color: 'white',
    paddingTop: '10%',
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  cards: {
    paddingTop: '3%',
    paddingLeft: '3%',
    paddingRight: '3%',
    paddingBottom: '3%',
  },
  header: {
    fontSize: 20
  },
  label: {
    fontWeight: 'bold',
  },
  cardBody: {
    flexDirection: 'row',
    paddingBottom: '2%',
  },
  data: {
    justifyContent: 'flex-end',
  }
});
