import React from 'react';
import {View} from 'react-native';

// Importando os navigators
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//Telas com Stack Navigator
import InitialStackScreen from '../Containers/StackScreens/InitialStackScreen';
import SecondStackScreen from '../Containers/StackScreens/SecondStackScreen';

//Telas com Switch Navigator
import InitialSwitchScreen from '../Containers/SwitchScreens/InitialSwitchScreen';
import SecondSwitchScreen from '../Containers/SwitchScreens/SecondSwitchScreen';

//Telas com Drawer Navigator
import InitialDrawerScreen from '../Containers/DrawerScreens/InitialDrawerScreen';
import SecondDrawerScreen from '../Containers/DrawerScreens/SecondDrawerScreen';
import {DrawerContent} from '../Components';

//Telas com Bottom Tab Navigator
import InitialTabScreen from '../Containers/TabScreens/InitialTabScreen';
import SecondTabScreen from '../Containers/TabScreens/SecondTabScreen';
import ThirdTabScreen from '../Containers/TabScreens/ThirdTabScreen';
import {TabIcon} from '../Components';

const BottomTabNavigator = createBottomTabNavigator({
  InitialTabScreen: {
    screen: InitialTabScreen,
    navigationOptions: {
      title: 'Initial',
      tabBarIcon: <TabIcon color={'red'} />,
    },
  },
  SecondTabScreen: {
    screen: SecondTabScreen,
    navigationOptions: {
      title: 'Second',
      tabBarIcon: <TabIcon color={'blue'} />,
    },
  },
  ThirdTabScreen: {
    screen: ThirdTabScreen,
    navigationOptions: {
      title: 'Third',
      tabBarIcon: <TabIcon color={'yellow'} />,
    },
  },
});

const StackNavigator = createStackNavigator({
  InitialStackScreen: {
    screen: InitialStackScreen,
    navigationOptions: {title: 'Second Stack Screen'},
  },
  SecondStackScreen: {
    screen: SecondStackScreen,
    navigationOptions: {title: 'Second Switch Screen'},
  },
});

const Drawer = createDrawerNavigator(
  {
    InitialDrawerScreen: {
      screen: InitialDrawerScreen,
      navigationOptions: () => ({
        drawerIcon: (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 50,
              backgroundColor: 'blue',
            }}
          />
        ),
      }),
    },
    SecondDrawerScreen: {
      screen: SecondDrawerScreen,
      navigationOptions: () => ({
        drawerIcon: (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 50,
              backgroundColor: 'red',
            }}
          />
        ),
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: true,
    },
    contentComponent:(props) => {
      return <DrawerContent {...props} />;
    },
  },
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Initial: InitialSwitchScreen,
      SecondSwitchScreen,
      Drawer,
      StackNavigator,
      BottomTabNavigator,
    },
    {
      defaultNavigationOptions: {
        headerShown: true,
        //initialRouteName: 'Initial',
      },
    },
  ),
);

export default Routes;
