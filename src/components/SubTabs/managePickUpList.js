import React, { Component } from 'react';
import {View,StyleSheet,Text} from 'react-native'
import MapView from 'react-native-maps';

export default class ManagePickUpList extends Component {
  render() {
    return (
      <View>
      <Text>Manage PickUp List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height:1000
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height:1000
  },
})
