import React,{Component} from 'react';
import {AppRegistry, View, Text, TextInput, Button,StyleSheet,ScrollView} from 'react-native';
import { TabNavigator } from 'react-navigation';
import ScanToRefillComponent from './scanToRefill';
import ManagePrescriptionsComponent from './managePrescriptions/managePrescriptions'
import ManagePickUpListComponent from './managePickUpList'
import ManageFamilyComponent from './manageFamily'
import TransferComponent from './transfer'
import WeekProgress from '../../components/Notification/WeekProgress'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  addNavigationHelpers,
} from 'react-navigation';

const SubNavScreen = ({ navigation}) => (
  <ScrollView>
    <ScanToRefillComponent navigation={navigation} />
  </ScrollView>
);

const ScanToRefill = ({ navigation }) => (
  <SubNavScreen navigation={navigation} />
);
ScanToRefill.navigationOptions = {

};

const ManageFamily = ({ navigation }) => (
  <ManageFamilyComponent navigation={navigation} />
);
ManageFamily.navigationOptions = {

};

const ManagePrescriptions = ({ navigation }) => (
  <ManagePrescriptionsComponent navigation={navigation} />
);
ManagePrescriptions.navigationOptions = {

};

const ManagePickUpList = ({ navigation }) => (
  <ManagePickUpListComponent navigation={navigation} />
);
ManagePickUpList.navigationOptions = {

};

const Transfer = ({ navigation }) => (
  <TransferComponent navigation={navigation} />
);
Transfer.navigationOptions = {

};

const Alerts = ({ navigation }) => (
  <WeekProgress navigation={navigation} />
);
Alerts.navigationOptions = {

};

const CustomTabRouter = TabNavigator(
  {
    ScanToRefill: {
      screen: ScanToRefill,
      navigationOptions: {
      tabBarLabel: 'Scan To Refill',
      tabBarIcon: ({ tintColor }) => <Icon name='barcode'
       size={26} style={{ color: tintColor }} />
    },
      path:'Scan'
    },
    ManageFamily: {
      screen: ManageFamily,
      navigationOptions: {
      tabBarLabel: 'Manage Family',
      tabBarIcon: ({ tintColor }) => <Icon name='users'
       size={26} style={{ color: tintColor }} />
    },
      path:'Family'
    },
    ManagePrescriptions: {
      screen: ManagePrescriptions,
      navigationOptions: {
      tabBarLabel: 'Manage Prescriptions',
      tabBarIcon: ({ tintColor }) => <Icon name='plus-square'
       size={26} style={{ color: tintColor }} />
    },
      path:'Pres'
    },
     ManagePickUpList: {
      screen: ManagePickUpList,
      navigationOptions: {
      tabBarLabel: 'Manage Pickup List',
      tabBarIcon: ({ tintColor }) => <Icon name='th-list'
       size={26} style={{ color: tintColor }} />
    },
      path:'PickUp'
    },
     Transfer: {
      screen: Transfer,
      navigationOptions: {
      tabBarLabel: 'Transfer',
      tabBarIcon: ({ tintColor }) => <Icon name='arrows'
       size={26} style={{ color: tintColor }} />
    },
      path:'Transfer'
    },
     Alerts: {
      screen: Alerts,
      navigationOptions: {
      tabBarLabel: 'Alerts',
      tabBarIcon: ({ tintColor }) => <Icon name='bell'
       size={26} style={{ color: tintColor }} />
    },
      path:'Notif'
    },
  },

  {
    headerMode: 'none',        // I don't want a NavBar at top
    tabBarPosition: 'top',
    swipeEnabled: false,
      animationEnabled: false,

      tabBarOptions: {
        activeTintColor: 'purple',  // Color of tab when pressed
        inactiveTintColor: 'grey', // Color of tab when not pressed
        showIcon: 'true', // Shows an icon for both iOS and Android
        scrollEnabled: true,
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
  container: {
    marginTop: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    height: 48,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
});


export default CustomTabRouter;
