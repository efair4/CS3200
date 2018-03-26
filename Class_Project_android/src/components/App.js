/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'

import HarryWand from './HarryWand'
import ElderWand from './ElderWand'
import VoldemortWand from './VoldemortWand'

const Root = StackNavigator({
  HarryWand: {
    screen: HarryWand
  },
  ElderWand: {
    screen: ElderWand
  },
  VoldemortWand: {
    screen: VoldemortWand
  }
},
{
  mode: 'modal'
});


export default class App extends Component {
  render() {
    return (
      <Root/>
    );
  }
}


