import React from 'react'
import {View,TextInput} from 'react-native'
import Axios from 'axios'




export default class AddPrescription extends React.Component{

	render(){
		return(
			<View style={{justifyContent:'center', alignItems: 'center'}} >
			<TextInput
      value='Enter Medicine Name' />

      <TextInput
      value='Enter Quantity' />

      <TextInput
      value='Enter Your pharmacy Number' />

      <TextInput
      value='Enter url for image' />

      <TextInput
      value='Enter Your prescription Number' />
			</View>


    );
	}
}
// BuyingDate : String,
// PrescriptionImage : String,
// PharmacyNumber : String,
// PrescriptionNumber : String,
// Repeat : String
