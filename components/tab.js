import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class TabButton extends React.Component{
  render(){
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <View style={{height: 30, width: 30, backgroundColor: 'gray'}}></View>
          <Text style={{marginTop: 5, color: '#A0A0A0'}}>{this.props.name}</Text>
      </View>

    )
  }
}

export default class Tabs extends Component {
  render() {
      return(
      <View style={styles.taps}>
        <TabButton name="TimeLine"/>
        <TabButton name="Friends"/>
        <TabButton name="Notification"/>
        <TabButton name="Setting"/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  taps: {
    height: 60,
   backgroundColor: 'white',
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   borderTopWidth: 0.5,
   borderColor: '#A0A0A0',
  },
});
