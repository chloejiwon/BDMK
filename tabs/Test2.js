
import React from 'react';
import {Text, View} from 'react-native';

export default class Test2 extends React.Component{
  static navtigationOptions = {
    tabBarLabel: 'Tab2'
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
        This is Tab2

      </Text>
    </View>
  }
}
