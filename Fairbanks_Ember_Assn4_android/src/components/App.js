/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	TextInput,
	ScrollView,
	Alert,
	Image,
	View,
	KeyboardAvoidingView
} from 'react-native';

import styles from '../styles/Styles';
import HistoryItem from './HistoryItem';

var KEYCOUNT = 0;
let BEGINNINGCOUNT = 0;

const aboutText = 'Calculator was created by Ember Fairbanks, '+
	'who studied under the hand of award-winning professor, Dr. Chad Mano.';
const helpText = 'Enter the desired calculation using the '+
	'keypad and press the checkmark when finished.\n'+
	'Tap on an item from the history to see the command that '+
	'produced that result. You can also try typing \'clear\', \'remove\','+
	'\'undo\', or \'about\'.';

//type Props = {};
export default class App extends Component<{}> {
  	constructor(props) {
    	super(props);
    	this.state = {
			inputVal: "",
			history: [],
			displayVals: []
    	}
  	}
	render() {
		return (
		<View style={styles.container}>
			<View style={styles.imageContainer}
			>
				<Image
					style={styles.backgroundImage} 
					source={require('../assets/lightCalcBackground.jpeg')}
				/>
			</View>
			<View style={styles.infoContainer}>
				<Text style={{fontSize: 40, fontFamily: 'sans-serif-bold', color: 'black', textDecorationLine: 'underline'}}>
					History
				</Text>
				<KeyboardAvoidingView style={{flex: 1, width: '100%'}}>
					<ScrollView
						ref='scrollView'
						onContentSizeChange={(contentWidth, contentHeight)=>{        
							this.refs.scrollView.scrollToEnd({animated: true});
						}}
						style={styles.scrollView}
						contentContainerStyle={styles.scrollContent}
						keyboardShouldPersistTaps='always'
        				keyboardDismissMode='on-drag'
					>	
						{this.state.displayVals}
					</ScrollView>
				</KeyboardAvoidingView>
				<TextInput 
					ref = 'textInput'
					autoFocus={true}
					onFocus={(event) => {
						this.handleTextFocus();
					}}
					keyboardShouldPersistTaps='always'
					style = {styles.textInput}
					keyboardType = 'default'
					placeholder = 'Tap here'
					value = {this.state.inputVal}
					blurOnSubmit={true}
					onChangeText = {(inputVal) => this.setState({inputVal})}
					onSubmitEditing = {() => {
						this.checkCommand(this.state);
						this.refs.textInput.focus();
					}}
				/>
			</View>
		</View>
		);
	}

	handleTextFocus() {
		this.refs.scrollView.scrollToEnd({animated: true});
	}

	checkCommand(state) {
		this.setState({
			inputVal: ""
		});
		switch(state.inputVal) {
			case "clear":
				this.setState({
					history: [],
					displayVals: []
				});
				break;
			case "remove":
				if(state.history.length > 0) {
					state.history.pop();
					let newState = this.updateDisplayVals(state);
					this.setState({
						history: newState.history,
						displayVals: newState.displayVals
					});
				}
				break;
			case "undo":
				if(state.history.length > 0) {
					var lastResult = state.history[state.history.length-1];
					state.history.pop();
					let newState = this.updateDisplayVals(state);
					this.setState ({
						history: newState.history,
						displayVals: newState.displayVals,
						inputVal: lastResult.props.command
					});
				}
				break;
			case "about":
				this.launchAlert('About Calculator',aboutText)
				break;
			case "help":
				this.launchAlert('Help!',helpText);
				break;
			default:
				this.addCommand(state);
		}
	}

	addCommand(state) {			
		try {
			let result = this.parseCommand(state);
			result = this.precisionRound(result, 4);
			if(result < 0) {
				color = 'red';
			}
			else {
				color = 'black';
			}
			let command = state.inputVal;
			state.history.push(<HistoryItem 
									color = {color}
									command = {command}
									result = {result}
									text = {result.toString()}
									key = {KEYCOUNT}>
								</HistoryItem>);
			let newState = this.updateDisplayVals(state);
			this.setState({
				history: newState.history,
				displayVals: newState.displayVals
			});
		}
		catch(error) {
			if(typeof error != "string") {
				error = 'Something was wrong with that command!';
			}
			this.launchAlert("Error!", error);
			return;
		}
	}

	precisionRound(number, precision) { //This function is from Mozilla's dev website
		var factor = Math.pow(10, precision);
		return Math.round(number * factor) / factor;
	  }

	parseCommand(state) {
		var infix = state.inputVal;
		var hasOperators = false;
        var outputStack = [];
        var operatorStack = [];
        var operators = {
            "/": {
                precedence: 2
            },
            "*": {
                precedence: 2
            },
            "+": {
                precedence: 1
            },
            "-": {
                precedence: 1
            }
		}
		if(infix[0] === '-') {
			infix = '0' + infix;
		}
        for(var i = 0; i < infix.length; i++) {
			var token = infix[i];
			if(token == 'r' && i + 1 < infix.length && infix[i+1]>0 && infix[i+1]<=state.history.length) {
				let histItem = state.history[infix[i+1]-1];
				let val = histItem.props.result;
				outputStack.push(val);
				i++;
			}
            else if(!isNaN(token) && token !== ' ') {
				var j = i + 1;
				while(!isNaN(infix[j]) && infix[j] !== ' ' && j < infix.length) {
					token += infix[j];
					j++;
					i++;
				}
                outputStack.push(token);
			} 
			else if("*/+-".indexOf(token) !== -1) {
                var o1 = token;
                var o2 = operatorStack[operatorStack.length - 1];
                while("*/+-".indexOf(o2) !== -1 && ((operators[o1].precedence <= operators[o2].precedence))) {
                    outputStack.push(operatorStack.pop());
                    o2 = operatorStack[operatorStack.length - 1];
                }
				operatorStack.push(o1);
				hasOperators = true;
			} 
			else if(token === '(') {
                operatorStack.push(token);
			} 
			else if(token === ')') {
				var j = operatorStack.length - 1;
                while(operatorStack[j] !== '(' && j >= 0) {
					outputStack.push(operatorStack.pop());
					j--;
				}
				if(j < 0) {
					throw('The expression doesn\'t have matching parentheses.');
				}
                operatorStack.pop();
			}
			else if(token === ' ') {
				continue;
			}
			else {
				throw('Illegal Character');
			}
        }
        while(operatorStack.length > 0) {
            outputStack.push(operatorStack.pop());
		}
		if(!hasOperators) {
			throw('Unknown command');
		}
		let result = this.solvePostfix(outputStack);
		if(isNaN(result)) {
			throw(result);
		}
		else {
			return result;
		}
	}

	solvePostfix(postfix) {
		var resultStack = []; 
		for(var i = 0; i < postfix.length; i++) {
			if(!isNaN(postfix[i])) {
				resultStack.push(postfix[i]);
			} 
			else {
				var a = resultStack.pop();
				var b = resultStack.pop();
				if(postfix[i] === '+') {
					resultStack.push(parseFloat(a) + parseFloat(b));
				} 
				else if(postfix[i] === '-') {
					resultStack.push(parseFloat(b) - parseFloat(a));
				} 
				else if(postfix[i] === '*') {
					resultStack.push(parseFloat(a) * parseFloat(b));
				} 
				else if(postfix[i] === '/') {
					if(a == 0){
						return 'Divide by 0';
					}
					resultStack.push(parseFloat(b) / parseFloat(a));
				}
				else if(postfix[i] === '(') {
					return 'The expression doesn\'t have matching parentheses.';
				}
			}
		}
		if(resultStack.length > 1) {
			return 'Something was wrong with that command!';
		} 
		else {
			return resultStack.pop();
		}		
	}

	//I referenced The Polyglot Developer for help on the above two functions.

	updateDisplayVals(state) {
		state.displayVals = [];
		for(var i = 0; i < state.history.length; i++) {
			let command = state.history[i].props.command;
			let color = state.history[i].props.color;
			state.displayVals.push(<View 
										style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', borderBottomWidth: 1, borderBottomColor: 'black'}}
										key={KEYCOUNT}>
										<View style={{flex: 1}}>
										<Text 
											style={this.getStyle(color, 'left')}
											onPress={() =>this.launchAlert('Expression','The expression that produced the selected result: '+command.toString())}
										>
											{'r' + (i+1).toString() + ':'}
										</Text>
										</View>
										<View style={{flex: 1}}>
										<Text
											style={this.getStyle(color, 'right')}
											onPress={() =>this.launchAlert('Expression','The expression that produced the selected result: '+command.toString())}	
										>
											{state.history[i].props.text}
										</Text>
										</View>
									</View>
								);
			KEYCOUNT+=1;
		}
		return state;
	}

	launchAlert(title,msg) {
		Alert.alert(
			title,
			msg,
				[
					{text: 'OK', onPress: () => console.log('OK pressed')},
				],
				{cancelable: true,}
			);
	}

	getStyle(textColor, align) {
		return{
			fontSize: 40,
			color: textColor,
			textAlign: align,
		}
	}
}