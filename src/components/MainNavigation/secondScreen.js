import React from 'react'
import {View,Text} from 'react-native'
import SubScreenNavigator from './SubNavigation/subNavigationScreen'
export default class SecondScreen extends React.Component{
	static navigationOptions={
		tabBarLabel: 'Tab2'
	}
	render(){
		return(
			<View style={{padding: 10, justifyContent:'center', alignItems: 'center'}} >
			<Text> this is SecondScreen</Text>
			</View>
			)
	}
}
