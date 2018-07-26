import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native';
import {TabNavigator } from 'react-navigation';
import MainComponents from './MainComponents'
import Register from './Register'
import WeekProgress from '../components/Notification/WeekProgress';
import Icon from 'react-native-vector-icons/FontAwesome'
import MediaryTabNavigation from './mediaryTabNavigation';
import SearchHistory from '../components/search/history';
import Wellness from './WellnessTab/wellness'

const MyNavScreen = ({ navigation}) => (
<ScrollView >
    <MediaryTabNavigation />
  </ScrollView>
);

const PharmacyScreen = ({ navigation }) => (
  <MyNavScreen  navigation={navigation} />
);

PharmacyScreen.navigationOptions = {
  tabBarLabel: 'Pharmacy',
};

const WellnessScreen = ({ navigation }) => (
  <Wellness navigation={navigation} />
);

WellnessScreen.navigationOptions = {
  tabBarLabel: 'Wellness',
};

const FindStoreScreen = ({ navigation }) => (
  <SearchHistory navigation={navigation} />
);

FindStoreScreen.navigationOptions = {
  tabBarLabel: 'Find a store',
};

const AlarmScreen = ({ navigation }) => (
  <WeekProgress navigation={navigation} />
);

AlarmScreen.navigationOptions = {
  tabBarLabel: 'Alarm',
};

const AllComponents = TabNavigator(
  {
    Pharmacy: {
      screen: PharmacyScreen,
      navigationOptions: {
      tabBarLabel: 'Pharmacy',
      tabBarIcon: ({ tintColor }) => <Icon name='medkit'
       size={26} style={{ color: tintColor }} />
    },
      path: 'chats',

    },
    Wellness: {
      screen: WellnessScreen,
      navigationOptions: {
      tabBarLabel: 'Wellness',
      tabBarIcon: ({ tintColor }) => <Icon name='pagelines'
       size={26} style={{ color: tintColor }} />
    },
      path: 'cart',
    },
    FindStore: {
      screen: FindStoreScreen,
      navigationOptions: {
      tabBarLabel: 'Find A Store',
      tabBarIcon: ({ tintColor }) => <Icon name='map-marker'
       size={26} style={{ color: tintColor }} />
    },
      path: 'chat',
    },
    Alarm: {
      screen: AlarmScreen,
      navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => <Icon name='search'
       size={26} style={{ color: tintColor }} />
    },
      path: 'chats',
    },

  },
  {
      tabBarOptions: {
        activeTintColor: 'purple',  // Color of tab when pressed
        inactiveTintColor: 'grey', // Color of tab when not pressed
        showIcon: 'true', // Shows an icon for both iOS and Android

        labelStyle: {
          fontSize: 12,
        },

        style: {
          backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
          padding:3
        }
      },
  }

);

const styles = StyleSheet.create({


});

export default AllComponents;
