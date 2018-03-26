//Timer class
//This class contains a timerVal property that is set in App.js
import React, { Component } from 'react';
import {
    StyleSheet,
	Text,
	View
} from 'react-native';

import styles from '../styles/Styles';

export default class Timer extends Component {
    render() {
        return (
			<View style = {styles.scoreBar}>
				<Text style = {styles.label}>
					Time Left
				</Text>
				<Text style={styles.value}>
					{this.props.timerVal} 
				</Text>
			</View>
        );
    }
}