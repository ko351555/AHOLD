import React from 'react'
import {View,Text} from 'react-native'

export default class SecondSubScreen extends React.Component{
	static navigationOptions={
		tabBarLabel: 'SubTab2'
	}
	render(){
		return(
			<View style={{padding: 10, justifyContent:'center', alignItems: 'center'}} >
			<Text> this is SecondSubScreen</Text>
			</View>
			)
	}
}
