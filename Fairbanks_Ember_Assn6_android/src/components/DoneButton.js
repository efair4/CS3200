import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class DoneButton extends Component {
    render() {
        return(
            <TouchableOpacity
                onPress={this.props.dispatchAddList(new List(this.props.listName, this.props.iconName))}
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