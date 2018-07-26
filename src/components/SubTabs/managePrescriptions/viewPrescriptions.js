import React,{Component} from 'react';
import {AppRegistry, View, Text,
	TouchableOpacity, TextInput, Button, ScrollView,StyleSheet, FlatList} from 'react-native';
import Axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card } from 'react-native-elements'
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class ViewPrescriptions extends Component{
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

				}

		}

componentDidMount(){
  this.viewPrescription();
}


deleteprescription(pnum)  {
	console.log(pnum)

  Axios({
    method: 'delete',
    url: 'http://localhost:3000/delete',
    data:{
      prescriptionNumber: pnum
       }
  }).then(function(result){
		console.log(result);
		this.viewPrescription();
  }.bind(this))

}


viewPrescription() {

      let arr=[];
      Axios({
        method: 'post',
        url: 'http://localhost:3000/view',
        data:{
          userEmail: this.props.email
        }

      }).then(function(result){
        console.log(result)
        for(var i in result.data)
        {

        arr.push(result.data[i]);
        // console.log(arr)
        }
        this.setState({userPrescriptions:arr})
      // console.log(this.state.userPrescriptions)
      }.bind(this))
    }


    render() {
      return (
				<View style={styles.container}>
				<View style={styles.header}>

					<TouchableOpacity
					 style={{flex:1,opacity:1,justifyContent:'center',marginLeft:10,paddingTop:5,padding:5}}
				>
				<Icon
					name='arrow-left'
					size={20}
					color='black'
					/>
					</TouchableOpacity>
					<View style={{paddingRight:30,justifyContent:'center',alignItems:'center'}}>
					<Text
					style ={{color:'white',marginLeft:40,fontSize:18,alignItems:'center'}}>
					Your Prescription Details</Text>
					</View>

				</View>


			<View style={styles.body}>
        {this.state.userPrescriptions.map((u, i) => {
          return(
						<View >
						<Card  title="Prescription details" containerStyle={{backgroundColor: 'white' }}
						fontSize="18"
						fontFamily="arial"

						dividerStyle={{ backgroundColor: 'grey' }}
						flexDirection="column"
						key={i} >

								<View>
                  <View  style={styles.container1}>
											<Text style={styles.label}>E-mail : </Text>
											<Text style={styles.data}>{u.userEmail}</Text>
									</View>
									  <View  style={styles.container1}>
											<Text style={styles.label}>Buying Date : </Text>
											<Text style={styles.data}>{u.BuyingDate}</Text>
										</View>
										<View  style={styles.container1}>
											<Text style={styles.label}>Medicine : </Text>
											<Text style={styles.data}>{u.Medicine}</Text>
										</View>
										  <View  style={styles.container1}>
											<Text style={styles.label}>Quantity: </Text>
											<Text style={styles.data}>{u.Quantity}</Text>
											</View>

										<View  style={styles.container1}>
											<Text style={styles.label}>Pharmacy Number : </Text>
											<Text style={styles.data}>{u.PharmacyNumber}</Text>
										</View>

										<View  style={styles.container1}>
											<Text style={styles.label}>Prescription Number : </Text>
											<Text style={styles.data}>{u.PrescriptionNumber}</Text>
											</View>
                  </View>

									<View style={styles.btn}>
									<Button
								  onPress={()=>{this.deleteprescription(u.PrescriptionNumber)}}
								  title="Delete"
									color="purple"

								/>
									</View>
            </Card>
						</View>
          )
      })}
    </View>
	</View>
      );
    }
    }

		const styles = StyleSheet.create({
			container:{
				flexDirection:'column',
				flex:1,
			},
			container1:{
				flexDirection:'row',
			},
			header:{
				backgroundColor:'#841584',
				height:60,
				paddingBottom:20,
				width : Dimensions.get('window').width,
				//flexDirection : 'column'
			},
			body:
	    {
	      backgroundColor:'#e8edf4',
	    },
		label : {
			paddingTop:15,
			fontSize : 16,
			color : 'purple',
			height : 35,
			fontFamily :'Verdana',
			marginBottom:10
		},
		data : {
			paddingTop:15,
			fontSize : 16,
			color: 'black',
			paddingLeft : 20,
			height : 35,
			fontFamily :'Verdana',
			marginBottom:10,
		},
		btn : {
			padding:90,
			paddingTop:10,
			paddingBottom:10,

		}
	});
