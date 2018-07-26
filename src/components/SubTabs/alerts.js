import React,{Component} from 'react';
import {AppRegistry, View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default class AlertsComponent extends Component{

	render(){
		return(
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>
			 AlertsComponent
			</Text>
		</View>//close main view
		);

	}
}

const styles = StyleSheet.create({
	viewStyle:{
		padding:15,
	},
	textStyle:{
		fontSize: 19,
    	fontWeight: 'bold',
	},
})
