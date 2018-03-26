//HistoryItem class
//This class contains a text property that is set in App.js
import React, { Component } from 'react';
import {
    StyleSheet,
	Text,
	View
} from 'react-native';

import styles from '../styles/Styles';

export default class HistoryItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Text>
                {this.props.text}
            </Text>
        );
    }

}