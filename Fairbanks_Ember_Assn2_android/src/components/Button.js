//Custom Button class
//This class contains a buttonTitle property that is set in App.js
import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

import styles from '../styles/Styles';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                style = {styles.button}
                onPress = {() => this.props.whenPressed()}
            >
                <Text style = {styles.buttonText}>
                    {this.props.buttonTitle}
                </Text>
            </TouchableOpacity>
        );
    }
}