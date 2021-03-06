import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import styles from '../styles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CancelButton extends Component {
    render() {
        return(
            <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
            >
                <Text style={styles.cancelButton}>
                    Cancel
                </Text>
            </TouchableOpacity>
        )
    }
}