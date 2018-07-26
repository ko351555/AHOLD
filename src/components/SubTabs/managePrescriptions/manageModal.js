import React,{Component} from 'react';
import {View, Text, ScrollView,TouchableHighlight, Modal, AsyncStorage } from 'react-native';
import { Card, Button, } from 'react-native-elements'
import ViewPrescriptions from './viewPrescriptions'

export default class ManageModal extends Component{
	state = {
      modalVisible: false,
			email: '',
			name:''
    }


  setModalVisible(visible) {
  this.setState({modalVisible: visible});
	this.addTask();
}

addTask () {


	AsyncStorage.getItem('email', (err, result) => {
		 console.log(result);
		 this.setState({ email: result })

		 // => {'name':'Chris','age':31,'traits':{'shoe_size':10,'hair':'brown','eyes':'blue'}}
	 });

}

	render(){
		return(
			<ScrollView>
					<Card title='View Prescription'>
				<Text style={{marginBottom: 10}}>
					To view your previous prescription click the button provided below
				</Text>
				<Button
					icon={{name: 'pageview'}}
				 backgroundColor='#660066'
					fontFamily='Lato'
					buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
					onPress={() => {
								this.setModalVisible(true)
							}}
					title='View' />
				</Card>
  		<Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
          >

         <View style={{marginTop: 22}}>
          <ScrollView>

				 
					<ViewPrescriptions email={this.state.email}/>

					</ScrollView>
     			</View>

    </Modal>
    </ScrollView>


		);

	}
}
