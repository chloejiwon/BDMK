import React, {Component} from 'react';
import {ActivityIndicator,AppRegistry,Image, Text,ScrollView,StyleSheet,View,FlatList} from 'react-native';
import { List, ListItem } from 'react-native-elements'

var cnt = 0;

export const randomUsers = (count = 10) => {
    const arr = [];
    for (let i = 0; i < count; i ++) {
      arr.push({
        key: i,
        name: 'CIRCUS',
        date:'2017-11-20',
        image:'http://www.divedice.com/uploaded/prd/604151505109954.jpg',
       });
    }
    return arr;
  };

export default class TimeLine extends Component{

 

    state = {
        refreshing: false,
        data: randomUsers(20),
      };
    
      onEndReached = () => {
        this.setState(state => ({
          data: [
            ...state.data,
            ...randomUsers(),
          ]
        }));
      };
    
      onRefresh = () => {
        this.setState({
          data: randomUsers(20),
        });
      }

    render(){
        return (
              //  <List>
                        <FlatList
                        data={this.state.data}
                        initialNumToRender={20}
                      //  onEndReachedThreshold={1}
                     //   onEndReached={this.onEndReached}
                        refreshing={this.state.refreshing}
                      //  onRefresh={this.onRefresh}
                        renderItem={({ item }) => {

                            if((cnt)%2==0){
                                cnt++;
                                return (
                                    
                                    <View style={styles.container}>
                                    <View style = {{
                                        flex:1,
                                        height:200,
                                        alignItems:'center',
                                        justifyContent: 'center',}}>
                                        <Image 
                                            source={{uri:'http://www.divedice.com/uploaded/prd/604151505109954.jpg'}}
                                            style={styles.photo}/>
                                    </View>
                                    <View style = {{flex:1,height:200,
                                        alignItems:'center',justifyContent: 'center',}}>
                                        <Text style={styles.data}>{item.date}</Text>
                                    </View>
                                </View>
                                );
                            }else{
                                cnt++;
                                return (
                                    <View style={styles.container}>
                                    <View style = {{
                                        flex:1,
                                        height:200,
                                        alignItems:'center',
                                        justifyContent: 'center',}}>
                                        <Text style={styles.data}>{item.date}</Text>
                                    </View>
                                    <View style = {{flex:1,height:200,
                                        alignItems:'center',justifyContent: 'center',}}>
                                            <Image 
                                                    source={{uri:'http://www.divedice.com/uploaded/prd/604151505109954.jpg'}}
                                                    style={styles.photo}/>
                                    </View>
                                </View>
                                );
                            }
                        }
                    }
                />
          //  </List>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      height:200,
    },
    photo:{
        width: 100,
        height: 100,
    },
    date:{
    },
    right:{
        flex:1,
        flexDirection:'row',
    }
});