import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome'
//import Icon from 'react-native-vector-icons/FontAwesome';


export default  class Welcome extends Component {
  constructor(props) {
  super(props);
  this.state = {
    color: props.initialColor
  };
}
  componentDidMount() {

       // Print component dimensions to console

   }

 onPressSignIn = (navigate) => {
   const navigateAction = NavigationActions.navigate({
      routeName: 'SignIn',
      params: {'SignIn':'yes'},
      action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
    })
  navigate.dispatch(navigateAction)
 }

 onPressRegister = (navigate) => {
   const navigateAction = NavigationActions.navigate({
      routeName: 'Register',
      params: {'Register':'yes'},
      action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
    })
  navigate.dispatch(navigateAction)

 }


  render() {
    console.log(this.props)
    const {navigation} = this.props
    return (
      <View  style={styles.container}>
        <View style ={styles.ImageView}>
        <Image style ={styles.gaintImage} source={require('./giant.png')} />

        </View>

        <View style ={styles.SignInView}>
        <TouchableOpacity  style={{opacity:1,padding:20, height:60,
           backgroundColor: 'white',flex:1,flexDirection:'row',justifyContent:'center',
           alignItems:'center'}} onPress ={()=>this.onPressSignIn(navigation )} >

        <Icon
        name='user'
        size={25}
        color='#737373'
        style={{height:25,width:25,flex:2,padding:3}}/>
        <Text style={{flex:3,padding:3,fontSize:20,fontFamily:'Verdana',color:'#660066'}}>Sign-In</Text>

        </TouchableOpacity>

        <Text style={{flex:3,alignItems:'center',justifyContent:'center',padding:10,fontSize:17}}>
          <Text style = {{color:'#bfbfbf'}}>
          Not a member yet? </Text>
          <Text style = {{ color : '#ffffff'}}
          onPress={()=>this.onPressRegister(navigation )}>
          Register!
          </Text>
        </Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#660066',
    paddingHorizontal: 50,
    flexDirection : 'column'

  },
  ImageView :{
    flex : 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gaintImage: {
    width: 250,
    height: 100,
  },

  SignInView : {
    flex :1,
    alignItems:'center'
  }


});
