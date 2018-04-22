/**
 * Trip Tracker Final Project
 * @Ember Fairbanks
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Platform,
	StyleSheet,
	Text,
	AsyncStorage,
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
import AboutScreen from '../screens/AboutScreen';

import { saveInitialInfo, setInfo } from '../actions/actions';

const titleColor = 'black';
const navBarColor = colors.YELLOW;

const HomeTab = StackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			title: 'Home',
			headerStyle: {backgroundColor: navBarColor},
			headerTitleStyle: {color: titleColor}
		}
	},
	AddActivityScreen: {
		screen: AddActivityScreen,
		navigationOptions: {
			title: 'Add Trip Saving Activity',
			headerStyle: {backgroundColor: navBarColor},
			headerTitleStyle: {color: titleColor}
		}
	},
	EditActivityScreen: {
		screen: EditActivityScreen,
		navigationOptions: {
			headerStyle: {backgroundColor: navBarColor},
			headerTitleStyle: {color: titleColor}
		}
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
			title: 'Activity History',
			headerStyle: {backgroundColor: navBarColor},
			headerTitleStyle: {color: titleColor}
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
			title: 'Settings',
			headerStyle: {backgroundColor: navBarColor},
			headerTitleStyle: {color: titleColor}
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
			title: 'Trophies',
			headerStyle: {backgroundColor: navBarColor},
			headerTitleStyle: {color: titleColor}
		}
	}
},
{
	initialRouteName: 'Home'
});

const AboutTab = StackNavigator({
	Home: {
		screen: AboutScreen,
		navigationOptions: {
			title: 'About the App',
			headerStyle: {backgroundColor: navBarColor},
			headerTitleStyle: {color: titleColor}
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
	},
	AboutTab: {
		screen: AboutTab,
		navigationOptions: {
			tabBarLabel: 'About',
			tabBarIcon: ({tintColor}) => {
				return <MatComIcon name='information-outline' size={25} color={tintColor}/>
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
		activeTintColor: navBarColor
	}
});

class App extends Component {
	componentWillMount() {
		AsyncStorage.multiGet(['recentActivities', 'allActivities', 'username', 'address', 'goals', 'tripsSaved'])
		.then((response) => {
			var info = [];
			for(i = 0; i < response.length; i++) {
				info.push(response[i][1]);
			}
			this.props.dispatchSetInfo(info);
		});
	}
	render() {
		return (
			<RootTab/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loadingInfo: state.loadingInfo,
		recentActivities: state.recentActivities
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatchSetInfo: (info) => dispatch(setInfo(info))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)