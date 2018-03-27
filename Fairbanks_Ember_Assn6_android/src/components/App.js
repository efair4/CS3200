/**
 * Grocerying 
 * @Ember Fairbanks
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import {
	StackNavigator,
	NavigationActions	
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import CreateListScreen from '../screens/CreateListScreen';

const RootNavigator = StackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			title: 'My Lists'
		}
	},
	List: {
		screen: ListScreen
	},
	CreateList: {
		screen: CreateListScreen
	}
},
{
	initialRouteName: 'Home',
	mode: 'modal'
});

export default class App extends Component {
	render() {
		return (
		<RootNavigator/>
		);
	}
}