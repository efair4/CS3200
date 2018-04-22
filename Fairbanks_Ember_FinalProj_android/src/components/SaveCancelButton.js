import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import styles from '../styles/Styles';

export default class SaveCancelButton extends Component {
    render() {
        return(
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{margin: 10, marginRight: 10}}
                    onPress={() => this.props.cancelPressed()}
                >
                    <Text style={styles.cancelButtonText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 10}}
                    onPress={() => this.props.savePressed()}
                >
                    <Text style={styles.saveButtonText}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}