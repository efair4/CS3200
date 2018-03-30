import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Styles';

export default class DoneButton extends Component {
    render() {
        return(
            <TouchableOpacity
                onPress={() => this.props.doneButtonPressed()}
            >
                <Text style={styles.doneButton}>
                    Done
                </Text>
            </TouchableOpacity>
        )
    }
}