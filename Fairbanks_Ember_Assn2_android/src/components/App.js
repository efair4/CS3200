/**
 * Assn2-Counter
 * @Ember Fairbanks
 */
//This is where the view is created and the components are added and controlled.
import React, { Component } from 'react';
import {
  	Platform,
  	StyleSheet,
  	Text,
  	View
} from 'react-native';
import Button from './Button';
import Counter from './Counter';
import styles from '../styles/Styles';

export default class App extends Component<{}> {
  	constructor(props) {
    	super(props);

    	this.state = {
      		value: 0 //value holds the current counter value
    	}
  	}

  	render() {
    	return (
			<View style={styles.container}>
				<Text style = {styles.title}> 
					Counter!
				</Text>
				<Counter //Custom Counter
					style={styles.counter}
					counterVal = {this.state.value}
				/>
				<Button //Up Button
					style = {styles.button}
					buttonTitle = 'Up'
					whenPressed = {this.upPressed.bind(this)}
				/>
				<Button //Down Button
					style = {styles.button}
					buttonTitle = 'Down'
					whenPressed = {this.downPressed.bind(this)}
				/>
				<Button //Reset Button
					style = {styles.button}
					buttonTitle = 'Reset'
					whenPressed = {this.resetPressed.bind(this)}
				/>
			</View>
    	);
  	}

  	//The upPressed method increments the counter value
	upPressed() {
		this.setState({
			value: this.state.value + 1
		});
	}

	//The downPressed method decrements the counter value
	downPressed() {
		this.setState({
		value: this.state.value - 1
		});
	}

	//The resetPressed method resets the counter value to 0
	resetPressed() {
		this.setState({
		value: 0
		});
	}
}