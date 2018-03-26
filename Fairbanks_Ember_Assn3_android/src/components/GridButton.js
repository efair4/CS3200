//GridButton class
//This class contains a buttonColor property that is set in App.js
import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import styles from '../styles/Styles';

export default class GridButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={this.props.styleStuff}
                onPress={() => this.props.gridButtonPressed()}
            />
        );
    }
}