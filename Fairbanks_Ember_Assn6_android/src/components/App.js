/**
 * Grocerying 
 * @Ember Fairbanks
 */
import { AsyncStorage } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import styles from '../styles/Styles';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import CreateListScreen from '../screens/CreateListScreen';
import {setLists} from '../actions/actions';
const RootNavigator = StackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			title: 'My Lists'
		}
	},
	ListScreen: {
		screen: ListScreen
	},
	CreateListScreen: {
		screen: CreateListScreen
	}
},
{
	initialRouteName: 'Home',
	mode: 'modal'
});

class App extends Component {
	componentWillMount() {
		AsyncStorage.getItem('lists')
		.then((response) => {
			console.log(response);
			var param = JSON.parse(response);
			if(response === null) {
				param = [];
			}
			this.props.dispatchSetLists(param);
		})
		.catch((error) => {
			console.log("No lists");
		});
	}

	render() {
		if(this.props.loadingLists == true) {
			return <Text style={styles.grabListMessage}> Grabbing your lists...</Text>
		}
		else {
			return (
				<RootNavigator/>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		lists: state.lists,
		loadingLists: state.loadingLists
	}
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchSetLists: (lists) => dispatch(setLists(lists))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);