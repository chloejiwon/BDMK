import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';

import {TabNavigator, StackNavigator } from 'react-navigation';

import NavBar from './components/navBar.js'
import Tabs from './components/tab.js'

/*
var MainScreenNavigator = TabNavigator({
  Tab1: {screen:Test},
  Tab2: {screen:Test2}
},{
  tabBarPosition: 'bottom',
//  swipeEnabled: true
  tabBarOptions:{
    activeTintColor:'white',
    activateBackgroundColor: 'darkgreen',
    inactiveTintColor:'black',
    inactiveBackgroundColor: 'green',
    lableStyle:{
      fontSize:20,
      padding:10
    }
  }
});

MainScreenNavigator.navigationOptions={
  title:"Tab example"
};
export default MainScreenNavigator;*/
class User extends Component {
  render() {
    return(
      <View style={styles.user}>

      </View>
    )
  }
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <NavBar />

          <View style={{height: 40}}>
          </View>
          <View style={{flex: 1}}>
          </View>
          <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  user: {
    height: 200,
    backgroundColor: '#81D4FA',
  },
  buttonGroup: {
    height: 200,
    backgroundColor: '#C5E1A5',
  },

});
