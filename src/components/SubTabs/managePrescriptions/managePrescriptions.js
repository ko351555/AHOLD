import React,{Component} from 'react';
import {View,Text, Image,ScrollView, KeyboardAvoidingView,TextInput,TouchableOpacity, StyleSheet,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import AddModal from './addModal'
import {CheckBox} from 'react-native-elements'
import ManageModal from './manageModal'
import { Card, Button, } from 'react-native-elements'



export default class ManagePrescriptionsComponent extends Component{
	constructor(props) {
    super(props);
			this.state = {
name:'',
flag:''
				}

		}

componentDidMount()
{
this.getname();
}
		getname(){
		AsyncStorage.getItem('name', (err, result) => {

  		 console.log(result);
  		 this.setState({ name: result })

  	 });
		 AsyncStorage.getItem('flag', (err, result) => {

				console.log(result);
				this.setState({ flag: result })

			});
}
  render() {
    return (
			<ScrollView>

{this.state.flag=='true'?
 <View style ={{flexDirection:'row', width: 350, paddingTop:10}}>


				 <View style ={{alignSelf:'flex-start', paddingBottom: 10, paddingLeft: 5 }}>
					 <Text style = {{fontSize: 20,}}>
						 Welcome back
					 </Text>
					 <View style ={{alignSelf:'flex-start', paddingBottom: 10, paddingLeft: 5 }}>
					 <Text style = {{fontSize: 25, color: 'purple'}}>
					{this.state.name} !
					 </Text>
					 </View>
				 </View>
				 <View style = {{ right: 0,position: 'absolute'}}>
				 <Icon
				 name='smile-o'
size={40}
				 color='purple'
				 style = {{color:'purple', paddingTop:20, paddingRight: 15,alignSelf: 'flex-end'}}/>


				 </View>
			 </View>
			 :
			 <View>
			 <Text></Text>
			 </View>
		 }

		 <View>
		 <Card title='Visit Our Expert Pharmacists'>
	 <Text style={{marginBottom: 10}}>
		 At your service 7 days a week to fill prescriptions and offer advice when you need it most
	 </Text>
	{/* <Image
	 style={{alignSelf:'flex-end'}}
          //source={require('./nutritionist.jpg')} />*/}
	 <Button
		icon={{name:'book'}}
	 backgroundColor='#660066'
		fontFamily='Lato'
		buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}

		title='Book an appointment' />

 </Card>
		 </View>

		 <View>
		<Card  title='Refill your prescription' containerStyle={{backgroundColor: 'white' }}
		fontSize="18"
		fontFamily="arial"


		flexDirection="column">
		<View style={{padding:5,paddingLeft:5,flexDirection:'row'}}>

			<TouchableOpacity style={{padding:5,marginRight:10,marginLeft:10,flexDirection:'column'}}>
			<Icon name='align-left'
       size={16}
			 style={{alignSelf:'center',padding:3,paddingRight:20}} />
			 <Text style={{alignSelf:'center',padding:5}}>Refill {"\n"}Prescription</Text>
			</TouchableOpacity>

			<TouchableOpacity style={{padding:5,marginRight:10,marginLeft:10,flexDirection:'column'}}>
			<Icon name='check-square'
       size={16}
			 style={{alignSelf:'center',padding:3,paddingRight:20}} />
			 <Text style={{alignSelf:'center',padding:5}}>Check refill {"\n"}status</Text>
			</TouchableOpacity>

			<TouchableOpacity style={{padding:5,marginRight:10,marginLeft:10,flexDirection:'column'}}>
			<Icon name='arrows'
       size={16}
			 style={{alignSelf:'center',padding:3,paddingRight:15}} />
			 <Text style={{alignSelf:'center',justifyContent:'center',padding:5}}>Transfer {"\n"}Prescription</Text>
			</TouchableOpacity>
		</View>

		<View style={styles.body}>
		<View style={{flexDirection:'row',flex:1}}>
			<Text style={styles.label} >Enter your pharmacy no.</Text>
			<TextInput
			style={styles.textInput}
			underlineColorAndroid='white'
			onChangeText={(pharmacyNumber) => this.setState({pharmacyNumber})} />
		</View>

		<View style={{flexDirection:'row',flex:1}}>
			<Text style={styles.label} >Enter last 4 digits of your phone no.</Text>
			<TextInput
			style={styles.textInput}
			underlineColorAndroid='white'
			onChangeText={(pharmacyNumber) => this.setState({pharmacyNumber})} />
    </View>

		<View style={{flexDirection:'row',flex:1}}>
			<Text style={styles.label} >Enter your prescription no.</Text>
			<TextInput
			style={styles.textInput}
			underlineColorAndroid='white'
			onChangeText={(pharmacyNumber) => this.setState({pharmacyNumber})} />
    </View>
		</View>

	<Button
	 icon={{name:'book'}}
	backgroundColor='#660066'
	 fontFamily='Lato'
	 buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}

	 title='Refill your prescription' />

 </Card>
		</View>

			<AddModal />
			<ManageModal />
</ScrollView>
    );
  }
}

const styles = StyleSheet.create({

	label: {
		paddingTop:15,
		fontSize : 12,
		color : 'black',
		 height : 35,
		fontFamily :'Verdana',
		paddingLeft:5
	},

	textInput:{
		height:40,
		flex:1,
		marginLeft:10,
		marginRight:10,
		backgroundColor:'white',
		marginBottom:10
	},
	body:
	{
		padding:2,
		backgroundColor:'#e8edf4',
	},

});
