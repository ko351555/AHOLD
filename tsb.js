import { Platform } from 'react-native';

// Import Screens
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';

export const Tabs = TabNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      tabBarLabel: 'Screen1',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='account-circle' size={26} style={{ color: tintColor }} />
    },
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: {
      tabBarLabel: 'Screen2',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-time' size={26} style={{ color: tintColor }} />
    },
  },
}, {
    headerMode: 'none',        // I don't want a NavBar at top
    tabBarPosition: 'bottom',  // So your Android tabs go bottom
    tabBarOptions: {
      activeTintColor: 'red',  // Color of tab when pressed
      inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
      showIcon: 'true', // Shows an icon for both iOS and Android
      showLabel: (Platform.OS !== 'android'), //No label for Android
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
        height: (Platform.OS === 'ios') ? 48 : 50 // I didn't use this in my app, so the numbers may be off.
      }
    },
});
