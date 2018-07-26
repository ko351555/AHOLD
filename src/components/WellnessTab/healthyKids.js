import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView,Image } from 'react-native';
import Button from 'react-native-button';
export default class HealthyKids extends Component {
  render() {
    return (
      <ScrollView
      style={styles.container}
      >

      <Image
      resizeMode='contain'
        source={require('./smilingkids.jpg')}
        >
          <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Healthy Kids </Text>
          </View>
          <View  style={styles.viewParagraph}>
              <Text
              style={styles.textParagraph}
              >
              Put your health in good hands with our nutritionists.
                 They are here to help you and your family stay well and make better {"\n"}food choices.
                    Look for them as your shop,attend a class, or svhedule  a private consultation{"\n"} to discuss  your nutritional needs.
             </Text>

             </View>
            <View >
              <Button  containerStyle={{ height:40,width:370, overflow:'hidden', backgroundColor: '#660066',justifyContent:'center'}}
              style={{fontSize: 20, color: 'white' ,fontFamily : 'Verdana',alignItems:'center',justifyContent:'center'}}
                styleDisabled={{color: 'red'}} >
                Learn more
            </Button>
            </View>

         </Image>

    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

  },

  textTitle: {
    fontSize: 18,
    color: 'white',
    padding:10
  },
  textParagraph:{
      fontSize: 12,
      textAlignVertical :'auto',
      color: 'white',
     padding:5
      },
  viewParagraph:{
      backgroundColor: 'rgba(1,1,1, 0.6)',
      // marginBottom:150,
  },
  viewTitle:{
      backgroundColor: 'rgba(163, 125, 171, 0.8)',
  },

});
//https://www.destinyusa.com/wp-content/uploads/sites/7/2016/04/Smiling-kids-showing-their-healthy-teeth.jpg
