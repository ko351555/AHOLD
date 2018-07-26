import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,ScrollView} from 'react-native';
import Button from 'react-native-button';
export default class OurNutrionists extends Component {
  render() {
    return (
      <ScrollView
      style={styles.container}
      >
      <Image resizeMode='stretch'
      source={require('./nutritionist.jpg')}

        >
          <Text style={styles.textTitle}>Our Nutritionists </Text>
          <View  style={styles.viewParagraph}>
              <Text
              style={styles.textParagraph}
              >
              Put your health in good hands with our nutritionists.{"\n"}
              They are here to help you and your family stay well {"\n"}and make better food choices.
              Look for them as your shop,attend a class, or svhedule {"\n"}a private consultation to discuss your nutritional needs.

             </Text>
            <View >
              <Button  containerStyle={{ height:40,width:370, overflow:'hidden', backgroundColor: '#660066',justifyContent:'center'}}
              style={{fontSize: 20, color: 'white' ,fontFamily : 'Verdana',alignItems:'center',justifyContent:'center'}}
                styleDisabled={{color: 'red'}} >
                Get to know our nutritionists
            </Button>
            </View>
        </View>
         </Image>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
  },
  textTitle: {
    fontWeight: 'bold',
    color: '#34495e',
    backgroundColor: 'rgba(163, 125, 171, 0.8)',
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
  },
  buttonView:{
     padding:10
  }
});
