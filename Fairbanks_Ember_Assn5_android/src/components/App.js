/**
 * MovieMania
 * @Ember Fairbanks
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	FlatList
} from 'react-native';
import { 
	StackNavigator,
	NavigationActions,
	TabNavigator
} from 'react-navigation';
import BrowseScreen from '../screens/BrowseScreen';
import SearchScreen from '../screens/SearchScreen';
import GenreScreen from '../screens/GenreScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import PersonDetailScreen from '../screens/PersonDetailScreen';

//React Navigation and Native Base have been added via npm

const BrowseTab = StackNavigator({
	Home: {
		screen: BrowseScreen,
		navigationOptions: {
			title: 'Genres'
		}
	},
	GenreScreen: {
		screen: GenreScreen
	},
	MovieDetailScreen: {
		screen: MovieDetailScreen
	},
	PersonDetailScreen: {
		screen: PersonDetailScreen
	}
},
{
	initialRouteName: 'Home',
	mode: 'modal',
});

const SearchTab = StackNavigator({
	Home: {
		screen: SearchScreen,
		navigationOptions: {
			title: 'Search'
		}
	},
	MovieDetailScreen: {
		screen: MovieDetailScreen
	},
	PersonDetailScreen: {
		screen: PersonDetailScreen
	}
},
{
	initialRouteName: 'Home',
	mode: 'modal',
});

const RootTab = TabNavigator ({
	TabOne: {
		screen: BrowseTab,
		navigationOptions: {
			title: 'Browse'
		}
	},
	TabTwo: {
		screen: SearchTab, 
		navigationOptions: {
			title: 'Search'
		}
	}
},
{
	tabBarPosition: 'bottom'
});

export default class App extends Component<{}> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<RootTab/>
		);
	}

}