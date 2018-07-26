import React, { Component } from 'react';
import { View,Button, Platform, ScrollView, StyleSheet,AppRegistry,Text,TouchableOpacity,DrawerLayoutAndroid } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

//import SampleText from './SampleText';
const Dimensions = require('Dimensions');

const window = Dimensions.get('window');


export default class MainComponents extends Component {
  constructor(props) {
  super(props);
  this.state = {

  };
}

openDrawerMethod=() =>{

}
  render(){

    return (
      <ScrollView style={styles.container}>

          <View style ={{flex:1,alignItems:'center',justifyContent :'center'}}>
          <TouchableOpacity onPress={() => this.openDrawerMethod()}>

          </TouchableOpacity>
          </View>



        <View style={styles.body}>

        </View>


      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  body : {
    flex : 7
  }

});
