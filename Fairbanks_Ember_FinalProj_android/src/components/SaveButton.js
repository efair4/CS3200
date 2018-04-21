import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from '../styles/Styles';

export default class SaveButton extends Component {
    render() {
        return(
            <TouchableOpacity style={{margin: 10}}
                onPress={() => this.props.savePressed()}
            >
                <Text style={styles.saveButtonText}>
                    Save
                </Text>
            </TouchableOpacity>
        )
    }
}