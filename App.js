import React from 'react';
import PropTypes from 'prop-types';
import {Button, NavigatorIOS, Text, View} from 'react-native';
import Menu from './Menu.js';

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Menu,
          title: 'Menu',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    );
  }
}