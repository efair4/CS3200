import React, { Component } from 'react';
import {
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NewListButton extends Component {
    render() {
        return(
            <TouchableOpacity
                style={{marginRight: 15}}
                onPress={() => this.props.navigation.navigate('CreateListScreen')}
            >
                <Icon 
                    name='plus'
                    size={20}
                />
            </TouchableOpacity>
        )
    }
}