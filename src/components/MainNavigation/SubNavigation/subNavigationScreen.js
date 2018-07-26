import React from 'react'
import {TabNavigator} from 'react-navigation'
import FirstSubScreen from './firstSubScreen'
import SecondSubScreeen from './secondSubScreen'

var SubScreenNavigator = TabNavigator({
	SubTab1: {
		screen : FirstSubScreen
	},
	SubTab2: {
		screen : SecondSubScreen
	},


});

SubScreenNavigator.navigationOptions={
	title:'SubNavigation'
}

export default SubScreenNavigator;
