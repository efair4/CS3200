import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from '../styles/Styles';

export default class EditButton extends Component {
    render() {
        return(
            <TouchableOpacity style={{margin: 10}}
                onPress={() => this.props.editPressed()}
            >
                <Text style={styles.editButtonText}>
                    Edit Information
                </Text>
            </TouchableOpacity>
        )
    }
}