/**
 * Trip Tracker Final Project
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
	TabNavigator,
	NavigationActions
} from 'react-navigation';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import OctIcon from 'react-native-vector-icons/Octicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/Styles';
import HomeScreen from '../screens/HomeScreen';
import AddActivityScreen from '../screens/AddActivityScreen';
import EditActivityScreen from '../screens/EditActivityScreen';
import HistoryScreen from '../screens/HistoryScreen';
import RewardsScreen from '../screens/RewardsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeTab = StackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			title: 'Home'
		}
	},
	AddActivityScreen: {
		screen: AddActivityScreen,
		navigationOptions: {
			title: 'Add Trip Saving Activity'
		}
	},
	EditActivityScreen: {
		screen: EditActivityScreen
	}
},
{
	initialRouteName: 'Home',
	mode: 'modal'
});

const HistoryTab = StackNavigator({
	Home: {
		screen: HistoryScreen,
		navigationOptions: {
			title: 'Activity History'
		}
	}
},
{
	initialRouteName: 'Home'
});

const SettingsTab = StackNavigator({
	Home: {
		screen: SettingsScreen,
		navigationOptions: {
			title: 'Settings'
		}
	}
},
{
	initialRouteName: 'Home'
});

const RewardsTab = StackNavigator({
	Home: {
		screen: RewardsScreen,
		navigationOptions: {
			title: 'Trophies'
		}
	}
},
{
	initialRouteName: 'Home'
});


const RootTab = TabNavigator({
	HomeTab: {
		screen: HomeTab,
		navigationOptions: {
			title: 'Home',
			icon: <OctIcon name='home'/>
		}
	},
	HistoryTab: {
		screen: HistoryTab,
		navigationOptions: {
			title: 'History',
			icon: <MatComIcon name='history'/>
		}
	},
	RewardsTab: {
		screen: RewardsTab,
		navigationOptions: {
			title: 'Trophies',
			icon: <EvilIcon name='trophy'/>
		}
	},
	SettingsTab: {
		screen: SettingsTab,
		navigationOptions: {
			title: 'Settings',
			icon: <EvilIcon name='gear'/>
		}
	}
},
{
	tabBarPosition: 'bottom'
});

export default class App extends Component {
	render() {
		return (
			<RootTab/>
		);
	}
}


