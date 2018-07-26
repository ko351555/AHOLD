import React, { Component } from 'react';
import { View,Button, Platform, ScrollView,
  AsyncStorage,StyleSheet,AppRegistry,
  Alert, KeyboardAvoidingView,Text,TouchableOpacity,DrawerLayoutAndroid } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import ImageAndText from './ImageAndText'
import SignInDrawer from './SignInDrawer'
import RegisterDrawer from './RegisterDrawer'
//import MainScreenNavigator from '../components/MainNavigation/mainNavigationScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
import AllComponents from './AllComponents'
import Axios from 'axios'
const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

export default class SignIn extends Component {
  constructor(props) {
  super(props);
  this.state = {
    clickSignIn:true,
    clickRegister:true,
    flex1:2,
    flex2:5,
    flexSignIn : 1,
    flexRegister : 1,
    flex:3
  };

  }

  componentDidMount(){
    this.drawer.openDrawer()
  }

  openDrawerMethod = () => {
    this.drawer.openDrawer()
  }

  handleClickSignInButton = () => {
      this.setState({clickSignIn:false,clickRegister:true,flex2:2,flexSignIn:4,flexRegister:1,flex:3,flex1:5})
  }

  handleClickSignInForm = () => {
      this.setState({clickSignIn:true,clickRegister:true,flex2:5,flexSignIn:1,flexRegister:1,flex:3,flex1:2})
  }

  handleClickRegister = () => {
    // console.log("inside register 1")
    this.setState({clickRegister:false,clickSignIn:true,flex2:2,flexSignIn:1,flexRegister:4,flex:3,flex1:5})
  }

  handleClickRegisterForm = () => {
    // console.log("inside register 2")
    this.setState({clickRegister:true,clickSignIn:true,flex2:5,flexSignIn:1,flexRegister:1,flex:3,flex1:2})
  }
  handleLogOut()
  {

    Axios({
  method: 'POST',
  url: 'http://localhost:3000/logout',

  }).then(function (response) {
  console.log(response);
  console.log(response)
  Alert.alert('You have been logged out.');


  }.bind(this))
  }
  render(){
  //  console.log(this.propss
    const {navigation} = this.props
    var navigationView = (

      <View style={{flex:2, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView>
      <ScrollView>
        <View style={{flex: this.state.flex, backgroundColor: '#e6e6e6',flexDirection:'column'}}>
          <ImageAndText/>
        </View>

        <View style={{flex:this.state.flex1,flexDirection:'column'}}>
        <View style = {{flex:this.state.flexSignIn}}>
          <SignInDrawer handleClickSignInButton={() => this.handleClickSignInButton()} handleClickSignInForm={()=>this.handleClickSignInForm} clickSignIn = {this.state.clickSignIn} clickRegister={this.state.clickRegister}/>
        </View>
          <View style={{flex:this.state.flexRegister}}>
            <RegisterDrawer navigation={navigation} handleClickRegister={() => this.handleClickRegister()} handleClickRegisterForm={()=>this.handleClickRegisterForm} clickSignIn = {this.state.clickSignIn} clickRegister={this.state.clickRegister}/>

          </View>

        </View>
        <View style={{flex:this.state.flex2}}>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    </View>
    );
    return (

      <DrawerLayoutAndroid
        ref={(_drawer) => this.drawer = _drawer}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>

        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <View style ={{flex:1,alignItems:"center", justifyContent:"center"}}>
            <TouchableOpacity onPress={() => this.openDrawerMethod()}>
            <Icon
            name='list'
            size={20}
            color='white'
            />
            </TouchableOpacity>
            </View>
            <View style={{flex : 4,alignItems:"flex-start", justifyContent:"center"}}>
            <Text style ={{color:'white'}}>GIANT</Text>
            </View>
            <TouchableOpacity
            style={{opacity:1,padding:15,
            flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}
          onPress={this.handleLogOut} >

            <Icon
            name='sign-out'
            size={20}
            color='#737373'
            style={{height:25,width:25,flex:2,padding:3}}/>


            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <AllComponents/>
          </View>
          </ScrollView>

          </DrawerLayoutAndroid>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection : 'row',

  },
  header : {
    flex : 1,
    backgroundColor : '#660066',
    width : Dimensions.get('window').width,
    flexDirection : 'row'
  },
  body : {
    flex : 7
  },
  slider :{
    flex: 2,
    backgroundColor: '#fff'
  }
});
