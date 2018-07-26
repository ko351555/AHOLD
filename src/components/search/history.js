import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native'
import MapView from 'react-native-maps';

export default class SearchHistory extends Component {
  render() {
    return (
      <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      <MapView.Marker
        coordinate={{
          latitude:37.78825,
          longitude:-122.4324,
        }}>
        </MapView.Marker>
      </MapView>
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
