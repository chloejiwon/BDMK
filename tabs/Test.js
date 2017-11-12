import React from 'react';
import {Text, View, Image} from 'react-native';

export default class Test extends React.Component{
  static navtigationOptions = {
    tabBarLabel: 'Home'
  }
  render(){
    return <View style = {
        {
          flex :1,
          justifyContent:'center',
          alignItems:'center'
        }
    }>
      <Text style={{fontSize:30}}>
        This is Tab1
      </Text>
    </View>
  }
}
