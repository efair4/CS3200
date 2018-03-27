import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class NewListButton extends Component {
    render() {
        return(
            <TouchableOpacity
                onPress={this.props.dispatchNavigate('CreateListScreen')}
            >
                <Icon name='plus'/>
            </TouchableOpacity>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchNavigate: (screen) => dispatch(navigate(screen))
    };
}

export default connect(null, mapDispatchToProps)(NewListButton);