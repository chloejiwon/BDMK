import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class NavBar extends Component {
  render() {
    return(
      <View style={styles.navBar}>
        <Text style={styles.navBarText}>
          BDMK
        </Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({

  navBar: {
    flex:0.1,
    height: 60,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth: 0.5,
    borderColor: '#A0A0A0',
  },
  navBarText: {
    fontSize: 25,
    color: 'grey',
  },
});
