import React from 'react'
import {View,Text} from 'react-native'


export default class FirstSubScreen extends React.Component{
	static navigationOptions={
		tabBarLabel: 'SubTab1'
	}
	render(){
		return(
			<View style={{padding: 10, justifyContent:'center', alignItems: 'center'}} >
			<Text>this is FirstSubScreen</Text>
			</View>
			)
	}
}
