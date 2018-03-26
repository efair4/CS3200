//ScoreLabel class
//This class contains a scoreVal property that is set in App.js
import React, { Component } from 'react';
import {
    StyleSheet,
	Text,
	View
} from 'react-native';

import styles from '../styles/Styles';

export default class ScoreLabel extends Component {
    render() {
        return (
			<View style = {styles.scoreBar}>
				<Text style = {styles.label}>
					Score
				</Text>
				<Text style = {styles.value}>
					{this.props.scoreVal}
				</Text>
			</View>
        );
    }
}