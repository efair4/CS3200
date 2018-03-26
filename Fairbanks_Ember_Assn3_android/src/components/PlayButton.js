//PlayButton class
//This class contains a buttonTitle property that is set in App.js
import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

import styles from '../styles/Styles';

export default class PlayButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style = {styles.playButton}
                onPress = {() => this.props.playButtonPressed()}
            >
                <Text style = {styles.buttonText}>
                    {this.props.buttonTitle}
                </Text>
            </TouchableOpacity>
        );
    }
}