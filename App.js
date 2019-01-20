import React from 'react';
import PropTypes from 'prop-types';
import {Button, NavigatorIOS, Text, View,Icon} from 'react-native';
import Menu from './src/components/Menu.js';
import TodaysMenu from './src/components/TodaysMenu.js';
import { createBottomTabNavigator,createAppContainer  } from 'react-navigation';

const BaseNavigator = createBottomTabNavigator(
  {
  Menu: {
      screen: Menu,
      navigationOptions: () => {return ({
        title:`Menu`,
        // tabBarIcon: () => <Icon name="bookmark"/>
      })},
  },
  TodaysMenu: {
      screen: TodaysMenu,
      navigationOptions: () => {return({
        title:`Today's Menu`,
        // tabBarIcon: () => <Icon name="heart"/>
      })},
  }
},
{
  tabBarOptions: {
      showLabel: true, // hide labels
      activeTintColor: '#F8F8F8', // active icon color
      inactiveTintColor: '#586589',  // inactive icon color
      style: {
          backgroundColor: '#64B5F6' // TabBar background
      }
  }
});

const AppContainer = createAppContainer(BaseNavigator);

export default class App extends React.Component {
  render() {
    
    return (
      <AppContainer/>
    );
  }
}