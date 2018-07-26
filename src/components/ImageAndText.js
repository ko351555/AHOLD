import React, { Component } from 'react';
import { View,Button, Platform, ScrollView, StyleSheet,AppRegistry,Text,TouchableOpacity,KeyboardAvoidingView,DrawerLayoutAndroid,Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
//import SampleText from './SampleText';
const Dimensions = require('Dimensions');

const window = Dimensions.get('window');


export default class ImageAndText extends Component {
  constructor(props) {
  super(props);
  this.state = {

  };
  }




  render(){

    return (

        <KeyboardAvoidingView style={{flex:1}}>
        <ScrollView>
        <View style={styles.everything}>
            <View style={styles.img}>
            <Image source={require('./usericon3.png')} style={styles.image} />
            </View>
              <View style = {styles.rest} />
        </View>
          <Text style={{flex:1,alignItems:'flex-end',justifyContent:'flex-end',color:'#737373',fontFamily:'Verdena', margin: 10, fontSize: 15, textAlign: 'left'}}>Not Signed in</Text>

        </ScrollView>
          </KeyboardAvoidingView>


    );
  }
}


const styles = StyleSheet.create({
img :{
flex:3,
padding:10

},
everything : {
    flex:5
},
reset : {
  flex:2
},
image:{
  height:90,
  width:90,
 alignItems:'center',
 justifyContent:'center',
  borderRadius:90/2,

}

});
