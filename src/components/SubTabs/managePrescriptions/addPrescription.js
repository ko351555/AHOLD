import React,{Component} from 'react';
import {AppRegistry,Alert, View, Text, TextInput, Button,
  KeyboardAvoidingView, ScrollView,StyleSheet, FlatList} from 'react-native';
import {CheckBox} from 'react-native-elements'
import Axios from 'axios'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class AddPrescription extends Component{
	constructor(props) {
    super(props);
			this.state = {
					medicine: '',
					Quantity:'',
					pharmacyNumber:'',
					image:'',
					prescriptionNumber:'',
					BuyingDate:'',
					userPrescriptions:[],
						morning:'',
						night:'',

				}
		}

    handlePrescription = () =>{

			console.log(this.props.userEmail)
console.log(this.state.morning)
			var d = new Date(),
     		minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    		hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    		ampm = d.getHours() >= 12 ? 'pm' : 'am',
    		months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    		days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
			var n= days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
				this.setState({BuyingDate:n})
				console.log('register')
		    Axios({
			    method: 'POST',
			    url: 'http://localhost:3000/add',
			    data:{
			    medicine:this.state.medicine,
			    Quantity:this.state.Quantity,
			    pharmacyNumber:this.state.pharmacyNumber,
			    image:this.state.image,
					prescriptionNumber:this.state.prescriptionNumber,
					userEmail:this.props.email,
					BuyingDate:n,
					morning:this.state.morning,
					night:this.state.night
		    }
		    }).then(function (response) {
		    	 console.log(response);
           Alert.alert(
             "Prescription added successfully !"
           )
		    }.bind(this))
		}

		updateModalFunctio(visible){
			this.props.modalFunction(visible)
		}
    render() {
      return (
        <ScrollView>
        <View style={styles.header}>
        <Text style ={{color:'white',marginLeft:15, fontSize:18,marginTop:15}}>Add Prescriptions</Text>
        </View>

        <KeyboardAvoidingView>
        <ScrollView style={styles.body}>

          <View style={{flexDirection:'column',flex:1}}>
	           <Text style={styles.label} >Medicine</Text>
	          <TextInput style={styles.textInput}
      			underlineColorAndroid='white'
      			onChangeText={(medicine) => this.setState({medicine})} />
          </View>

    <View style={{flexDirection:'column',flex:1}}>
			<Text style={styles.label} >Quantity</Text>
			<TextInput
			style={styles.textInput}
			underlineColorAndroid='white'
			onChangeText={(Quantity) => this.setState({Quantity})} />
    </View>

    <View style={{flexDirection:'column',flex:1}}>
			<Text style={styles.label} >Pharmacy Number</Text>
			<TextInput
			style={styles.textInput}
			underlineColorAndroid='white'
			onChangeText={(pharmacyNumber) => this.setState({pharmacyNumber})} />
    </View>

    <View style={{flexDirection:'column',flex:1}}>
			<Text style={styles.label} >Image</Text>
			<TextInput
			style={styles.textInput}
			underlineColorAndroid='white'
			onChangeText={(image) => this.setState({image})} />
    </View>

    <View style={{flexDirection:'column',flex:1}}>
			<Text style={styles.label} >Prescription Number</Text>
			<TextInput
			style={styles.textInput}
			underlineColorAndroid='white'
			onChangeText={(prescriptionNumber) => this.setState({prescriptionNumber})} />
    </View>

    <View style={styles.checkBox}>
					<CheckBox style={{backgroundColor:'#e8edf4', marginLeft:25,marginBottom:25,}}
					title="Morning"
					checked={this.state.morning}
					onPress={() => this.setState({ morning: !this.state.morning })}
					/>
					<CheckBox style={{backgroundColor:'#e8edf4', marginLeft:25, marginBottom:15,}}
					title="Night"
					checked={this.state.night}
					onPress={() => this.setState({ night: !this.state.night })}
					/>
     </View>

					<View style={{padding:10, flexDirection:'row'}}>
								<View style={{paddingLeft:15}}>
								<Button
								onPress={this.handlePrescription}
								title="Submit"
								color="#841584"
								/>
								</View>
								<View style={{paddingLeft:15}}>
								<Button
								onPress={() => {this.updateModalFunctio(false)}}
								title="Cancel"
								color="#841584"
								/>
					</View>

	</View>


</ScrollView>
</KeyboardAvoidingView>
</ScrollView>
      );
    }
  }

	const styles = StyleSheet.create({

		label: {
			paddingTop:15,
			fontSize : 16,
			color : 'black',
			 height : 35,
			fontFamily :'Verdana',
			paddingLeft:20
		},

    textInput:{
      height:40,
      flex:1,
      marginLeft:30,
      marginRight:30,
      backgroundColor:'white',
      marginBottom:10
    },
    body:
    {
      backgroundColor:'#e8edf4',
    },
    checkBox :{
      marginLeft:15,
      marginBottom:10,
      marginTop:10,
    },
    header:{
      backgroundColor:'#841584',
      height:50,
      width : Dimensions.get('window').width,
      //flexDirection : 'column'
    },

	});
