import React from 'react';
import {Icon, Button, Text} from 'native-base';
import { View, Linking, FlatList} from 'react-native';

class Classy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      users: '',
    };
  }

  componentDidMount = () => {
      fetch('http://elmango.pythonanywhere.com/users/?format=json', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            users: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }

   consoleMessage=()=>{
    this.state.users.map(anyIdentifierName=>console.log(anyIdentifierName.points));
   }

  render() {
    return (
    <View>
      <View style={{width: '12%', marginTop: 100}}>
        <Button iconLeft transparent onPress = {() => this.props.navigation.openDrawer()}>
          <Icon name='menu' style={{fontSize: 35, color: '#CEB888'}} />
        </Button>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 300 }}>
        <Button iconLeft transparent onPress={()=>{ Linking.openURL('https://www.classy.org/')}}>
          <Text> Classy Link </Text>
        </Button>
        <Button iconLeft transparent onPress={this.consoleMessage}>
          <Text> Test </Text>
        </Button>
      </View>  
    </View>
    );
  }
}

export default Classy;