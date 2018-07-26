import React from 'react'
import {ScrollView, View} from 'react-native'
import OurNutrionists from './ourNutrionists'
import HealthyKids from './healthyKids'

export default class Wellness extends React.Component{
  render(){
    return(
<View >
<ScrollView>
        <OurNutrionists />
  <HealthyKids />
  </ScrollView>
  </View>
    );
  }
}
