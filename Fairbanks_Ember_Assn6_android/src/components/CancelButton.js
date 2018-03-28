import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class CancelButton extends Component {
    render() {
        return(
            <TouchableOpacity
                onPress={this.props.dispatchPopScreen()}
            >
                <Text style={styles.cancelButton}>
                    Cancel
                </Text>
            </TouchableOpacity>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchPopScreen: () => dispatch(popScreen())
    };
}

export default connect(null, mapDispatchToProps)(CancelButton);