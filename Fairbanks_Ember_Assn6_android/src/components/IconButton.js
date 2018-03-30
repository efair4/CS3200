import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import styles from '../styles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class IconButton extends Component {
    render() {
        return(
            <TouchableOpacity 
                style={this.props.selected ? {borderColor: '#2097F4', borderWidth: 3, margin: 5}: {borderWidth: 0, margin: 5}}
                onPress={() => this.props.setIcon()}>
                 <Image style={styles.chooseIconImage} source={this.props.icon}/>
            </TouchableOpacity>
        )
    }
}