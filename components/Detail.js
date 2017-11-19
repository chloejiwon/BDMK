import React, {Component} from 'react';
import {ActivityIndicator,AppRegistry,Image, Text,ScrollView,StyleSheet,View,FlatList} from 'react-native';
import { List, ListItem } from 'react-native-elements'

var Json = {
    "id" : "1",
    "nickname" : "won",
    "write_date" : "2017-11-20",
    "play_date" : "2017-12-20",
    "place" : " Fun Time",
    "board_id" : "0",
    "board_title" : "Not a Bean!",
    "board_date" : "1999",
    "board_min" : "3",
    "board_max" : "6",
    "board_image" : "https://image.reviewrepublic.net/pic19366-Sk8Wm5k8b.jpg",
    "with" : "2",
    "winner" : "2",
}
class User extends Component {
    render() {
      return(
        <View style={styles.user}>
            <View style = {{flex:1,flexDirection:'row'}}>
                <View style = {{
                    flex:1,
                    alignItems:'center',
                    justifyContent: 'center',}}>
                    <Image 
                        source={require('../pngs/back.png')} 
                        style={{width: 40, height: 40}}/>
                </View>
                <View style = {{
                    flex:1,
                    alignItems:'flex-start',
                    justifyContent: 'center',}}>
                    <Text style = {{fontSize : 20}}>{Json.nickname}</Text>
                </View>
                <View style = {{
                    flex:4,
                    alignItems:'flex-end',
                    justifyContent: 'center',}}>
                    <Text>{Json.write_date}</Text>
                </View>
            </View>
        </View>
      )
  
    }
  }
  
  class Game extends Component {
    render() {
      return(
        <View style={styles.game}>
            <View style = {{flex:1,flexDirection:'row'}}>
                <View style = {{
                    flex:1,
                    alignItems:'center',
                    justifyContent: 'center',}}>
                    <Image 
                        source={{uri : 'https://image.reviewrepublic.net/pic19366-Sk8Wm5k8b.jpg'}}
                        style={{width: 130, height: 130}}/>
                </View>
                <View style = {{
                    flex:1,
                    flexDirection:'column'}}>
                    <View style = {{
                        flex:1,
                        alignItems:'flex-start',
                        justifyContent: 'center',}}>
                        <Text style = {{fontSize: 20}}>{Json.board_title}</Text>
                        <Text>({Json.board_date})</Text>
                    </View>
                    <View style = {{flex:1}}>
                        <Text>{Json.board_min}-{Json.board_max}인용</Text>
                    </View>
                </View>
            </View>
        </View>
      )
    }
  }
  
  class When_Where extends Component {
    render() {
      return(
        <View style={styles.when_where}>
            <View style = {{
                flex:1,
                flexDirection:'row'}}> 
                <View style = {{
                    flex:1,
                    alignItems:'flex-start',
                    justifyContent: 'center',}}>
                        <Text>When</Text>
                </View>
                <View style = {{
                    flex:1,
                    alignItems:'flex-start',
                    justifyContent: 'center',}}>
                        <Text>{Json.play_date}</Text>
                </View>   
                <View style = {{
                    flex:1,
                    alignItems:'flex-start',
                    justifyContent: 'center',}}>
                        <Text>Where</Text>
                </View>    
                <View style = {{
                    flex:1,
                    alignItems:'flex-start',
                    justifyContent: 'center',}}>
                        <Text>{Json.place}</Text>
                </View>                
            </View>
        </View>
      )
    }
  }
  class With extends Component {
    render() {
      return(
        <View style={styles.with}>
            <View style = {{
                flex:1,
                flexDirection:'row'}}> 
                <View style = {{
                    flex:1,
                    alignItems:'flex-start',}}>
                        <Text>With</Text>
                </View>
                <View style = {{
                    flex:5,
                    alignItems:'flex-start',
                    justifyContent: 'center',}}>
                    <Image 
                        source={require('../pngs/player.png')} 
                        style={{width: 70, height: 70}}/>
                </View>               
            </View>
        </View>
      )
    }
  }
  class Winners extends Component {
    render() {
      return(
        <View style={styles.winners}>
            <View style = {{
                flex:1,
                flexDirection:'row'}}> 
                 <View style = {{
                    flex:1,
                    alignItems:'flex-start',}}>
                        <Text>Game 1</Text>
                </View>
                <View style = {{
                    flex:5,
                    alignItems:'flex-start',
                    justifyContent: 'center',}}>
                    <Image 
                        source={require('../pngs/player.png')} 
                        style={{width: 70, height: 70}}/>
                </View>               
            </View>
        </View>
      )
    }
  }
  class Agenda extends Component {
    render() {
      return(
        <View style={styles.agenda}>
            <View> 
                <Text style = {{fontSize: 20}}> TITLE </Text>                            
            </View>
            <View> 
                <Text>ScrollViews can be configured to allow paging through views using swiping gestures by using the pagingEnabled props. Swiping horizontally between views can also be implemented on Android using the ViewPagerAndroid component.

A ScrollView with a single item can be used to allow the user to zoom content. Set up the maximumZoomScale and minimumZoomScale props and your user will be able to use pinch and expand gestures to zoom in and out. </Text>       
            </View>
        </View>
      )
    }
  }
export default class Detail extends Component {
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    
                    <User />
                    <View style={{flex: 1}}>
                    </View>
                    <Game />
                    <When_Where/>
                    <With />
                    <Winners />
                    <Agenda />
                </View>
            
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      marginTop: 15,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 20,
      flexDirection: 'column',
      borderRadius: 10,
      borderColor: '#000000',
      borderWidth: 1,
      //marginLeft: 10,
     // marginLeft: 10,
    },
    user: {
      height: 60,
      borderBottomWidth: 1,
      borderColor: '#555555',
     //backgroundColor: '#B0B0B0',
    },
    game: {
      height: 150,
      borderBottomWidth: 1,
      borderColor: '#555555',
    //  backgroundColor: '#81D4FA',
    },
    when_where: {
      height: 60,
      borderBottomWidth: 1,
      borderColor: '#555555',
    //  backgroundColor: '#00D4FA',
    },
    with: {
      height: 100,
      borderBottomWidth: 1,
      borderColor: '#555555',
    //  backgroundColor: '#C5E1A5',
    },
    winners: {
      height: 100,
      borderBottomWidth: 1,
      borderColor: '#555555',
    //  backgroundColor: '#FFD54F',
    },
    agenda: {
      borderColor: '#555555',
    //  backgroundColor: '#FFD54F',
    }
  
  });