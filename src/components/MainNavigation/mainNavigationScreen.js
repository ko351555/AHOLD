import React from 'react'
import {TabNavigator} from 'react-navigation'
import FirstScreen from './firstScreen'
import SecondScreeen from './secondScreen'

var MainScreenNavigator = TabNavigator({
	Tab1: {
		screen : FirstScreen,
	},
	Tab2 : {
		screen:SecondScreen,
	},

});

MainScreenNavigator.navigationOptions={
	title:'MainNavigation'
}

export default MainScreenNavigator;
//
// Pharmacy: {
// 	screen: PharmacyScreen,
// 	path: 'chats',
//
// },
// Wellness: {
// 	screen: WellnessScreen,
// 	path: 'cart',
// },
