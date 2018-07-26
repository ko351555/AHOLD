import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CustomTabRouter from '../components/SubTabs/navigationScreen';
export default class MediaryTabNavigation extends Component{

  render() {

    return (

  <View>
    <CustomTabRouter />
  </View>

    );

  }

}
