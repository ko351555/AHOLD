import React, { Component } from 'react';
import { View, Platform, ScrollView, StyleSheet,AppRegistry,Text,TouchableOpacity,KeyboardAvoidingView, DrawerLayoutAndroid,TouchableHighlight } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import  Button  from 'react-native-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import renderIf from 'render-if'
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class RegisterDrawer extends Component {
  constructor(props) {
  super(props);
  this.state = {
    click:false,
  };
  }




  openDrawerMethod = () => {
    this.setState({click:true})
  }

  handleRegister = (navigation) => {
    navigation.navigate('Register')
  }

  render(){

    const {navigation,handleClickRegister,handleClickRegisterForm,clickSignIn,clickRegister} = this.props
    console.log(clickRegister)
    const RegisterButton = () => (

      <TouchableOpacity onPress={()=>handleClickRegister()}
       style={{opacity:1,padding:30, height:60,width:300,  backgroundColor: 'white',flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}  >

      <Icon
      name='user-plus'
      size={25}
      color='#737373'
      style={{height:30,width:25,flex:1,padding:3}}/>

      <Text style={{flex:3,padding:3,fontSize:18 ,color:'#737373',fontFamily:'Verdena'}}>Register</Text>

      </TouchableOpacity>

    );
    const RegisterForm = () => (
      <View>

      <KeyboardAvoidingView>
      <ScrollView>

      <TouchableOpacity onPress={handleClickRegisterForm()}
      style={{opacity:1,padding:30, height:60,width:300,  backgroundColor: '#660066',
      flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

      <Icon
      name='user-plus'
      size={25}
      color='white'
      style={{height:30,width:25,flex:1,padding:3}}/>
      <Text style={{flex:4,padding:3,fontSize:18,color:'white',fontFamily:'Verdena'}}>Register</Text>
      <Icon
      name='chevron-up'
      size={15}
      color='white'
      style={{height:10,width:10,flex:1,padding:1,alignItems:'flex-end'}}/>
      </TouchableOpacity>

      <View style={{backgroundColor:'#e6e6e6',padding:20}}>
          <View style = {{marginLeft:20,flex:1,flexDirection:'column'}}>
          <View style = {{flex:1}}>

          <Text
            style = {{ fontSize:24,fontWeight: 'bold',marginLeft:10,fontFamily:'Verdena',paddingTop:10,paddingBottom:10,alignItems:'center',justifyContent:'center'}}>
            Save more with an online account</Text>
          </View>
          <View style = {{flex:4}}>
          <View style = {{flex:1}}>
          <View style = {{flex:1,flexDirection:'row'}}>

          <Icon
          name='check'
          size={10}
          color='#660066'
          style={{height:10,width:10,flex:1,alignItems:'flex-end',justifyContent:'flex-end'}}/>
          <Text
            style = {{  flex:5, fontSize:13,fontFamily:'Verdena',padding:3,paddingRight:0,alignItems:'flex-end',justifyContent:'flex-end'}}>
            Exclusive coupons on what you already buy</Text>
          </View>
          </View>
          <View style = {{flex:1}}>
          <View style = {{flex:1,flexDirection:'row'}}>

          <Icon
          name='check'
          size={10}
          color='#660066'
          style={{height:10,width:10,flex:1,alignItems:'flex-end',justifyContent:'flex-end'}}/>
          <Text
            style = {{ flex:5,fontSize:13,fontFamily:'Verdena',padding:3,paddingRight:0,alignItems:'flex-end',justifyContent:'flex-end'}}>
            Load hundreds of digital coupons to cards</Text>
          </View>
          </View>
          <View style = {{flex:1}}>
          <View style = {{flex:1,flexDirection:'row'}}>

          <Icon
          name='check'
          size={10}
          color='#660066'
          style={{height:10,width:10,flex:1,alignItems:'flex-end',justifyContent:'flex-end'}}/>
            <Text
              style = {{ flex:5,fontSize:13,fontFamily:'Verdena',padding:3,paddingRight:0,alignItems:'flex-end',justifyContent:'flex-end'}}>
              Instant access to your gas rewards</Text>
          </View>
          </View>
          </View>
              </View>

            <Button
                onPress={() => this.handleRegister(navigation)}
                containerStyle={{padding:10,marginTop:5, height:40,width:270, overflow:'hidden', backgroundColor: '#660066',justifyContent:'center'}}
                style={{fontSize: 18, color: 'white' ,fontFamily : 'Verdana',alignItems:'center',justifyContent:'center'}}
                styleDisabled={{color: 'red'}} >
                Register
            </Button>

      </View>
        </ScrollView>
            </KeyboardAvoidingView>

              </View>
              )

      const {click} = this.state

    return (
      <View>
      {renderIf(clickRegister===true)(<RegisterButton/>)}
      {renderIf(clickRegister===false)(<RegisterForm/>)}
      </View>

    );
  }
}


const styles = StyleSheet.create({


});
