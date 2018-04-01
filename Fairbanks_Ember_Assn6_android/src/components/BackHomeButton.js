import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import styles from '../styles/Styles';
import Icon from 'react-native-vector-icons/Feather';

export default class BackHomeButton extends Component {
    render() {
        return(
            <Icon name='arrow-left' 
                style={{marginLeft: 10, fontSize: 30}}
                onPress={() => this.props.navigation.dispatch(NavigationActions.reset({                            index: 0,
                    key: null,
                    actions: [NavigationActions.navigate({routeName: 'Home'})]
                    }))}> 
            </Icon>
        )
    }
}