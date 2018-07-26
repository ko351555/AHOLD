import React,{Component} from 'react';
import {AppRegistry, View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default class ScanToRefillComponent extends Component{

	render(){
		return(

			<View>
			<Text style={styles.textStyle}>
				ScanToRefill
			</Text>
		</View>//close main view
		);

	}
}

const styles = StyleSheet.create({
	
	textStyle:{
		fontSize: 19,
    	fontWeight: 'bold',
	},
})
