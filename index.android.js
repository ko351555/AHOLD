



import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Image,
   Button,
   TouchableHighlight,
   TouchableOpacity
 } from 'react-native';
 import { StackNavigator } from 'react-navigation';

 import SignIn from './src/components/SignIn'
import Welcome from './src/components/Welcome'
import Register from './src/components/Register'


const AholdApp = StackNavigator({
 SignIn: { screen: SignIn },
 Welcome: { screen: Welcome },
 Register : {screen:Register},
 
},{
 initialRouteName: 'Welcome',
 headerMode: 'none',
});






AppRegistry.registerComponent('AwesomeProject', () => AholdApp);
