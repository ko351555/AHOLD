import React, { Component } from 'react';
import { Text, TouchableOpacity,View,ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default class WeekProgress extends Component{
  render() {
    return (
      <ScrollView>
     	<View style = {styles.container}>
        <View style ={{flexDirection:'row', width: 350, paddingTop:10}}>
          <View style ={{alignSelf:'flex-start', paddingBottom: 10, paddingLeft: 5 }}>
            <Text style = {{fontSize: 20,}}>
              Welcome back
            </Text>
            <Text style = {{fontSize: 25, color: 'purple'}}>
              Richard !
            </Text>
          </View>
          <View style = {{ right: 0,position: 'absolute'}}>
            <Ionicons name="md-person-add" style = {{color:'purple', fontSize: 30, paddingTop:20, paddingRight: 15,alignSelf: 'flex-end',}}></Ionicons>
          </View>
        </View>
      <View style = {styles.shadow1}>
     		<Text style = {styles.textStyle1}>
     			This weeks progress
     		</Text>
     		<View style = {styles.textStyle2}>

          <View style= {{}}>
            <View style={styles.circleProgress}>
              <Text style={{color: '#ffffff', fontSize: 9}}>Su</Text>
            </View>
              <Text style={{color: '#C3C4C2', fontSize:10, paddingTop:5}}>12:06</Text>
          </View>

          <View style= {{}}>
            <View style={styles.circleProgress1}>
              <Text style={{color: '#ffffff', fontSize: 9}}>Mo</Text>
            </View>
              <Text style={{color: '#C3C4C2', fontSize:10, paddingTop:5}}>12:07</Text>
          </View>

          <View style= {{}}>
            <View style={styles.circleProgress}>
              <Text style={{color: '#ffffff', fontSize: 9}}>Tu</Text>
            </View>
              <Text style={{color: '#C3C4C2', fontSize:10, paddingTop:5}}>12:08</Text>
          </View>

          <View style= {{}}>
            <View style={styles.circleProgress}>
              <Text style={{color: '#ffffff',fontSize: 9}}>We</Text>
            </View>
              <Text style={{color: '#C3C4C2', fontSize:10, paddingTop:5}}>12:09</Text>
          </View>

          <View style= {{}}>
            <View style={styles.circleProgress}>
              <Text style={{color: '#ffffff', fontSize: 9}}>Th</Text>
            </View>
              <Text style={{color: '#C3C4C2', fontSize:10, paddingTop:5}}>12:10</Text>
          </View>


          <View style= {{}}>
            <View style={styles.circleProgress2}>
              <Text style={{color: '#ffffff', fontSize: 9}}>Sa</Text>
            </View>
              <Text style={{color: '#C3C4C2', fontSize:10, paddingTop:5}}>12:12</Text>
          </View>

     		</View>
      </View>
     				{/*For Reminder*/}
	     			<View style = {styles.textStyle3}>
		     			<View style = {styles.viewRemd1}>
		     			  <Ionicons name="md-alarm" style = {{color:'#8EF781', fontSize: 40}}></Ionicons>
		     				<Text style ={{padding: 10}}>
		     					Morning Reminder
		     				</Text>
			     			<View style={{alignSelf: 'flex-end',flex: 1, flexDirection: 'row'}}>
			     				<Text  style = {styles.textRemd1}>
			     					upcoming | 7:00 am
			     				</Text>
                  <Ionicons name="md-arrow-dropright" style = {{color:'#474648', fontSize: 30, padding:3}}></Ionicons>
			     			</View>
		     			</View>
	     				<View  style = {styles.viewRemd2}>
	     			   		<Ionicons name="md-alarm" style = {{color:'#F6530D', fontSize: 40}}></Ionicons>
		     				<Text style ={{padding: 10}}>
		     					Morning Reminder
		     				</Text>
		     				<View style={{alignSelf: 'flex-end', flex: 1, flexDirection: 'row'}}>
			     				<Text  style = {styles.textRemd2}>
			     					overdue by 1 hr | Due now
			     				</Text>
                  <Ionicons name="md-arrow-dropright" style = {{color:'#474648', fontSize: 30, padding:3}}></Ionicons>
		     				</View>
	     				</View>

     				</View>

     			{/*For Medical History*/}
			     		<View style = {styles.medHistory}>
			     			<Text style = {styles.textStyle5}>
			     				Your medications and reminders
			     			</Text>
			     			<View style = {styles.textStyle6}>
                  <View style = {{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Ionicons name="md-arrow-dropdown" style = {styles.dropdownIcon}></Ionicons>
                  </View>
			     			</View>
			     		</View>
     	</View>
      </ScrollView>
    );
};
}
