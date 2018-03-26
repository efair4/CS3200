//Custom Counter class
//This class contains a counterVal property that is set in App.js
import React, { Component } from 'react';
import {
    StyleSheet,
	Text,
	View
} from 'react-native';

import styles from '../styles/Styles';

export default class Counter extends Component {
    render() {
        return (
			<View style = {styles.counterView}>
				<Text style = {styles.counter}>
					{this.props.counterVal}
				</Text>
			</View>
        );
    }
}