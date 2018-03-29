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
                style={{borderColor: 'blue', borderWidth: 33}}
                onPress={() => this.props.setIcon(this.props.icon)}>
                 <Image style={styles.chooseIconImage} source={this.props.icon}/>
            </TouchableOpacity>
        )
    }
}