import React, { Component } from 'react';
import { View , Platform, ScrollView ,
  StyleSheet,AppRegistry,Text,TouchableOpacity,DrawerLayoutAndroid,KeyboardAvoidingView,
   TouchableHighlight ,TextInput ,AsyncStorage} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
//import {FormLabel,FormInput} from 'react-native-elements';
import Button from 'react-native-button';
import renderIf from 'render-if'
import Icon from 'react-native-vector-icons/FontAwesome'
import Axios from 'axios'
import AddPrescription from '../components/SubTabs/managePrescriptions/addPrescription.js';
import ViewPrescriptions from '../components/SubTabs/managePrescriptions/viewPrescriptions.js'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class SignInDrawer extends Component {
  constructor(props) {
  super(props);
  this.state = {
    click:false,
    username:'',
    password:'',
    userEmail:'',
    showHidePassword : true,
    flag:'false'
  };
  }
  componentWillMount(){
    console.log(this.FirstInput)
    }

  openDrawerMethod = () => {
    this.setState({click:true})
  }

  handleUserName (value)
  {
   this.state.username=value;
      console.log(this.state.username);
  }


    handlePassword(value){
      // this.FirstInput.secureTextEntry=true
      // this.FirstInput.value = value
    this.state.password=value;
    //this.setState({password:value})
      console.log(this.state.password);
    }

handleLogIn = () => {
console.log(this.state.username)
console.log(this.state.password)

  Axios({
method: 'POST',
url: 'http://localhost:3000/login',
data:{
username:this.state.username,
password:this.state.password,
}
}).then(function (response) {
console.log(response);
if(response.message==='Missing credentials'||response.message==='Incorrect username.'||response.message==='Incorrect password.')
			hashHistory.push('/');
		else
			hashHistory.push('/navbar');
this.setState({flag:'true'})
console.log(this.state.flag)
 AsyncStorage.setItem('email', response.data.email);
 AsyncStorage.setItem('name', response.data.username);
 AsyncStorage.setItem('flag',this.state.flag);




}.bind(this))

  }
  togglePassword = () => {
    console.log(this.FirstInput)
    console.log(this.FirstInput.value)
    console.log(this.FirstInput.secureTextEntry)
    this.FirstInput.secureTextEntry = false
  }


  render() {
    const {handleClickSignInButton,handleClickSignInForm,clickSignIn,clickRegister} = this.props
    console.log(clickSignIn)

    const SignInButton = () => (
          <TouchableOpacity onPress={()=>handleClickSignInButton()}
          style={{opacity:1,padding:30, height:60,width:300,  backgroundColor: 'white',
          flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}} >

          <Icon
          name='user'
          size={25}
          color='#737373'
          style={{height:30,width:25,flex:1,padding:3}}/>

          <Text style={{flex:3,padding:3,fontSize:18,color:'#737373',fontFamily:'Verdena'}}>Sign-In</Text>
          </TouchableOpacity>

    );
    const SignInForm = () => (

      <ScrollView>
      <TouchableOpacity onPress={handleClickSignInForm()}
      style={{opacity:1,padding:30, height:60,width:300,  backgroundColor: '#660066',
      flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

      <Icon
      name='user'
      size={25}
      color='white'
      style={{height:30,width:20,flex:1,padding:3}}/>

      <Text style={{flex:4,padding:3,fontSize:18,color:'white',fontFamily:'Verdena'}}>Sign-In</Text>

      <Icon
      name='chevron-up'
      size={15}
      color='white'
      style={{height:10,width:10,flex:1,padding:1,alignItems:'flex-end'}}/>

      </TouchableOpacity>

      <View style={{padding:20,backgroundColor:'#e6e6e6',flex:1,flexDirection:'column'}}>
        <View style={{marginBottom:5}}>
         <TextInput
           style={{height: 40, width:260,backgroundColor:'white'}}
           placeholder =" Username"
           underlineColorAndroid='white'
           onChangeText={this.handleUserName.bind(this)}

         />
         </View>


         <View style ={{marginBottom:5,flex:1,flexDirection:'row'}}>
         <View style={{flex:7}}>
           <TextInput
             style={{height: 40,width:200,backgroundColor:'white'}}
             placeholder ="Password"
             underlineColorAndroid='white'

            onChangeText={this.handlePassword.bind(this)}

          />

      </View>
      <View style={{flex:3,alignItems:'center',justifyContent:'center',height:40,width:50,backgroundColor:'#b3b3b3'}}>
      <TouchableOpacity onPress={this.togglePassword.bind(this)}>
      <Icon
      name='eye'
      size={25}

      />
      </TouchableOpacity>
      </View>
      </View>


      <View style ={{marginBottom:5}}>
        <Button
             onPress={this.handleLogIn.bind(this)}
             containerStyle={{ height:40,width:260, overflow:'hidden', backgroundColor: '#660066',justifyContent:'center'}}
             style={{fontSize: 18, color: 'white' ,fontFamily : 'Verdana',alignItems:'center',justifyContent:'center'}}
             styleDisabled={{color: 'red'}} >
             Sign In
         </Button>
        </View>
      </View>

      </ScrollView>

              )
    const {click} = this.state
    return (
      <View>

      {renderIf(clickSignIn===true)(<SignInButton/>)}
      {renderIf(clickSignIn===false)(<SignInForm/>)}

      </View>

    );
  }
}

const styles = StyleSheet.create({

});
