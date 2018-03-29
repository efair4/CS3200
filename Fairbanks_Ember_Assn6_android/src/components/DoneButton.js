import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Styles';
import List from '../models/List';
import addList from '../actions/actions';

class DoneButton extends Component {
    render() {
        return(
            <TouchableOpacity
                onPress={() => {
                    this.props.dispatchAddList(new List('name', 'iconpath'));
                    //this.props.navigation.goBack();
                }}//this.props.listName, this.props.iconName))}
            >
                <Text style={styles.doneButton}>
                    Done
                </Text>
            </TouchableOpacity>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchAddList: (list) => dispatch(addList(list))
    };
}

export default connect(null, mapDispatchToProps)(DoneButton);