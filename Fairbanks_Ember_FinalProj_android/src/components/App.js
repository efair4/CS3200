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
	NavigationActions,
	TabBarBottom
} from 'react-navigation';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import OctIcon from 'react-native-vector-icons/Octicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles/Styles';
import colors from '../utils/Colors';

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
			tabBarLabel: 'Home',
			tabBarIcon: ({tintColor}) => {
				return <OctIcon name='home' size={25} color={tintColor}/>
			}
		}
	},
	HistoryTab: {
		screen: HistoryTab,
		navigationOptions: {
			tabBarLabel: 'History',
			tabBarIcon: ({tintColor}) => {
				return <MatComIcon name='history' size={25} color={tintColor}/>
			}
		}
	},
	RewardsTab: {
		screen: RewardsTab,
		navigationOptions: {
			tabBarLabel: 'Trophies',
			tabBarIcon: ({tintColor}) => {
				return <EvilIcon name='trophy' size={25} color={tintColor}/>
			}
		}
	},
	SettingsTab: {
		screen: SettingsTab,
		navigationOptions: {
			tabBarLabel: 'Settings',
			tabBarIcon: ({tintColor}) => {
				return <EvilIcon name='gear' size={25} color={tintColor}/>
			}
		}
	}
},
{
	tabBarComponent: TabBarBottom,
	tabBarPosition: 'bottom',
	tabBarOptions: {
		showIcon: true,
		showLabel: true,
		activeTintColor: colors.PROCESS
	}
});

export default class App extends Component {
	render() {
		return (
			<RootTab/>
		);
	}
}


