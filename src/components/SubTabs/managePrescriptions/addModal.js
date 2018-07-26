import React,{Component} from 'react';
import {View, Text, TouchableHighlight, Modal, AsyncStorage } from 'react-native';
import { Card, Button, } from 'react-native-elements'
import AddPrescription from './addPrescription'

export default class AddModal extends Component{

  state = {
      modalVisible: false,
      email:''
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
      <View>

      <Card title='Add Prescription'>
    <Text style={{marginBottom: 10}}>
      To add new prescription click the button provided below
    </Text>

    <Button
     icon={{name:'add'}}
    backgroundColor='#660066'
     fontFamily='Lato'
     buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
     onPress={() => {
           this.setModalVisible(true)
         }}
     title='Add' />

  </Card>
  <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { this.setModalVisible(false)  }}
          >
         <View style={{marginTop: 22}}>
          <View>
            <AddPrescription email={this.state.email} modalFunction={this.setModalVisible.bind(this)}/>

          </View>
         </View>
        </Modal>
      </View>

		);

	}
}
