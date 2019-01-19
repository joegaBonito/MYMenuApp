import React from 'react';
import PropTypes from 'prop-types';
import {Button, NavigatorIOS, Text, View,Icon} from 'react-native';
import Menu from './Menu.js';
import TodaysMenu from './TodaysMenu.js';
import { createBottomTabNavigator,createAppContainer  } from 'react-navigation';

const BaseNavigator = createBottomTabNavigator(
  {
  Menu: {
      screen: Menu,
      navigationOptions: () => {tabBarIcon: () => {<Icon name="bookmark"/>}}
  },
  TodaysMenu: {
      screen: TodaysMenu,
      navigationOptions: () => {tabBarIcon: () => {<Icon name="heart" />}}
  }
},
{
  tabBarOptions: {
      showLabel: true, // hide labels
      activeTintColor: '#F8F8F8', // active icon color
      inactiveTintColor: '#586589',  // inactive icon color
      style: {
          backgroundColor: '#333333' // TabBar background
      }
  }
});

const AppContainer = createAppContainer(BaseNavigator);

export default class App extends React.Component {
  render() {
    
    return (
      // <NavigatorIOS
      //   initialRoute={{
      //     component: Menu,
      //     title: 'Menu',
      //     passProps: {index: 1},
      //   }}
      //   style={{flex: 1}}
      // /> 
      <AppContainer/>
    );
  }
}