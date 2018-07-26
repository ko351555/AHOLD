import React, { Component } from 'react';
import { View, Platform, ScrollView, StyleSheet,AppRegistry, Text,TouchableOpacity,KeyboardAvoidingView,DrawerLayoutAndroid,TextInput } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Button from 'react-native-button';
import Axios from 'axios'

//import SampleText from './SampleText';
const Dimensions = require('Dimensions');

const window = Dimensions.get('window');


export default class Register extends Component {
  constructor(props) {
  super(props);
  this.state = {
      username: '',
      password:'',
      mail_id:'',
      phoneno:''

    }

}

handleRegister = () =>{
console.log('register')
    Axios({
    method: 'POST',
    url: 'http://localhost:3000/signup',
    data:{
    username:this.state.username,
    password:this.state.password,
    email:this.state.mail_id,
    phoneno:this.state.phoneno
    }

    }).then(function (response) {
    console.log(response);
    }.bind(this))

}
  render(){
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style ={{flex:1,alignItems:'center',
          justifyContent :'center', backgroundColor:'#660066'}}>
          <TouchableOpacity onPress={() => this.openDrawerMethod()}>

          </TouchableOpacity>
          </View>

          <View style={{flex : 4,alignItems:"flex-start",
          justifyContent:"center", backgroundColor:'#660066'}}>
          <Text style ={{color:'white'}}>REGISTER</Text>
          </View>

        </View>
        <View style={styles.body}>
        <KeyboardAvoidingView>
        <ScrollView>
        <Text style={styles.label}>Name</Text>

        <TextInput
          style={{height: 40, width:310,backgroundColor:'white',marginBottom:10}}
        // placeholder="Enter your name"
         underlineColorAndroid='white'
          onChangeText={(username) => this.setState({username})} />

            <Text style={styles.label}>Email</Text>
        <TextInput
          style={{height: 40, width:310,backgroundColor:'white',marginBottom:10}}
        //  placeholder="Enter your mail-id"
          underlineColorAndroid='white'
          onChangeText={(mail_id) => this.setState({mail_id})} />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={{height: 40, width:310,backgroundColor:'white',marginBottom:10}}
            //placeholder="Enter your password"
          secureTextEntry={true}
          underlineColorAndroid='white'
            onChangeText={(password) => this.setState({password})} />

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
            style={{height: 40, width:310,backgroundColor:'white',marginBottom:20}}
              //placeholder="Enter your phone number"
              secureTextEntry={true}
              underlineColorAndroid='white'
              onChangeText={(phoneno) => this.setState({phoneno})} />

              <Button
                onPress={this.handleRegister}
                 containerStyle={{ height:40,width:310, overflow:'hidden', backgroundColor: '#660066',justifyContent:'center'}}
                style={{fontSize: 20, color: 'white' ,fontFamily : 'Verdana',alignItems:'center',justifyContent:'center'}}
                styleDisabled={{color: 'red'}} >
                Register
            </Button>

            </ScrollView>
        </KeyboardAvoidingView>
        </View>


      </ScrollView>

    );
  }


}
const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection : 'row'
  },
  header : {
    backgroundColor:'#841584',
    flex : 1,
    width : Dimensions.get('window').width,
    flexDirection : 'row'
  },
  body : {
    color:'#841584',
    flex : 7,
    padding:20
  },
  label : {
    paddingTop:15,
    fontSize : 16,
    color : 'black',
     height : 35,
    fontFamily :'Verdana',
    marginBottom:10

  },
  registerButton : {
    flex : 1,
    height : 20,
    width : 20,

  }




});
