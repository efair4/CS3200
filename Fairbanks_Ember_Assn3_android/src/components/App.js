/**
 * Tapit
 * @Ember Fairbanks
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	Dimensions
} from 'react-native';

import PlayButton from './PlayButton';
import GridButton from './GridButton';
import ScoreLabel from './ScoreLabel';
import Timer from './Timer';
import styles from '../styles/Styles';

const GameState = {
    NEWGAME: 'NEWGAME',
    LEVELONE: 'LEVELONE',
    LEVELTWO:'LEVELTWO',
    BETWEENROUNDS: 'BETWEENROUNDS',
	LOWSCORE: 'LOWSCORE',
	WRONGBUTTON: 'WRONGBUTTON',
	GAMEOVER: 'GAMEOVER'
}

const NUM_BUTTONS = 40;

const instructions ='Tap the blue button as quickly as you can! You must score at least 10 points to move on to Level 2.\n\n' +
	'Hit the button below to start Level 1!';

const colors = ['red','lightblue','magenta','darkviolet','gold','plum','orangered',
'springgreen','turquoise','steelblue','violet'];


var intervalID;
var gridArray;
var shouldMove = false;

export default class App extends Component<{}> {
	constructor(props) {
		super(props);

		this.state = {
			gameState: GameState.NEWGAME,
			timerVal: 10,
			scoreVal: 0,
			levelScore: 0
		}
	}

	render() {
		if(this.state.gameState == GameState.NEWGAME) {
			return this.newGame();
		}
		else if(this.state.gameState == GameState.LEVELONE) {
			return this.level();
		}
		else if(this.state.gameState == GameState.LEVELTWO) {
			return this.level();
		}
		else if(this.state.gameState == GameState.BETWEENROUNDS) {
			return this.betweenRounds();
		}	
		else {
			return this.gameOver();
		}
		// else if(this.state.gameState == GameState.LOWSCORE) {
		// 	return this.gameOver('lowScore');
		// }
		// else if(this.state.gameState == GameState.WRONGBUTTON) {
		// 	return this.gameOver('wrongButton');
		// }
		// else if(this.state.gameState == GameState.GAMEOVER) {
		// 	return this.gameOver('gameOver');
		// }
	}

	newGame() {
		return(
			<View style={styles.container}>
				<Text style={styles.title}>
					Tapit
				</Text>
				<Text style={styles.instructions}>
					{instructions}
				</Text>
				<PlayButton
					buttonTitle='Play!'
					playButtonPressed = {()=> this.startLevel(GameState.LEVELONE)}
				/>
			</View>
		);
	}

	level() {
		return (
			<View style={styles.container}>
				<View style={styles.topBar}>
					<Timer 
						style={styles.timer}
						timerVal={this.state.timerVal}
					/>
					<ScoreLabel 
						style={styles.score}
						scoreVal={this.state.scoreVal}	
					/>
				</View>
				{this.setupGrid()}
			</View>
		);
	}

	betweenRounds() {
		return(
			<View style={styles.container}>
				<Text style={styles.title}>
					You Did It!
				</Text>
				<Text style={styles.instructions}>
					Your scored {this.state.levelScore} points! Now tap the blue button but not any of the others.
	  				Hit the button below to play Level 2!
				</Text>
				<PlayButton
					buttonTitle='Play!'
					playButtonPressed = {()=> this.startLevel(GameState.LEVELTWO)}
				/>
			</View>
		);
	}

	gameOver() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					Game Over
				</Text>
				<Text style={styles.instructions}>
					{this.getMsg()}
				</Text>
				<PlayButton
					buttonTitle='Play Again!'
					playButtonPressed = {()=> this.updateState(this.state,GameState.NEWGAME)}
				/>
			</View>
		);
	}

	getMsg() {
		if(this.state.gameState == GameState.LOWSCORE) {
			return 'You only scored ' + this.state.levelScore + ' points. Tap the button below to try again.';
		}
		else if(this.state.gameState == GameState.WRONGBUTTON) {
			return 'Oh no! You pressed a wrong button. Tap the button below to try again.';
		}
		else {
			return 'Great job! You scored ' + this.state.levelScore + ' points. Tap the button below to play again!'
		}
	}

	setupGrid() {
		if(!shouldMove && gridArray) return (<View style={styles.gridView}>{gridArray}</View>);
		var buttons = new Array();
		var color;
		let blueButtonInt = this.getRandomInt(NUM_BUTTONS);
		for(let i = 0; i < NUM_BUTTONS; i++) {
			if(this.state.gameState == GameState.LEVELONE) {
				color = 'white';
			}
			else {
				color = colors[this.getRandomInt(colors.length)];
			}
			if(i === blueButtonInt) {
				color = 'blue';
			}
			buttons.push(<GridButton 
							styleStuff={this.getGridButtonStyle(color)}
							key={i}
							gridButtonPressed={()=> this.gridPressed(this.state,i,blueButtonInt)}
							/>);
		}
		gridArray = buttons;
		shouldMove = false;
		return (<View style={styles.gridView}>{buttons}</View>);
	}

	startLevel(newGameState) {
		this.setTimer();
		this.updateState(this.state, newGameState); 
	}

	setTimer() {
		intervalID = setInterval(()=> {
			this.setState({
				timerVal: this.state.timerVal - 1
			});		
			if(this.state.timerVal == 0) {
				this.stopTimer(this.state);
			}
		}, 1000);
	}
	
	stopTimer(prevState) {
		clearInterval(intervalID);
		var newGameState;
		if(prevState.scoreVal >= 10) {
			if(prevState.gameState == GameState.LEVELTWO) {
				newGameState = GameState.GAMEOVER;
			}
			else {
				newGameState = GameState.BETWEENROUNDS;
			}
		}
		else {
			newGameState = GameState.LOWSCORE;
		}
		this.updateState(prevState, newGameState);
	}

	getGridButtonStyle(color) {
		return{
			margin: 3,
			height: 63,
			width: 63,
			borderRadius: 10,
			backgroundColor: color
		}
	}

	gridPressed(prevState,index,blueIndex) {
		if(prevState.gameState == GameState.LEVELONE) {
			if(index == blueIndex) {
				shouldMove = true;
				this.setState({
					scoreVal: prevState.scoreVal + 1
				})
			}
		}
		else {
			if(index == blueIndex) {
				shouldMove = true;
				this.setState({
					scoreVal: prevState.scoreVal + 1
				})
			}
			else {
				clearInterval(intervalID);
				this.updateState(prevState, GameState.WRONGBUTTON);
			}
		}
	}

	updateState(prevState, newGameState) {
		gridArray = undefined;
		shouldMove = false;
		this.setState({
			gameState: newGameState,
			timerVal: 10,
			scoreVal: 0,
			levelScore: prevState.scoreVal
		});
	}

	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
}