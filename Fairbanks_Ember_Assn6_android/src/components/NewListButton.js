import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import navigate from '../actions/actions';

class NewListButton extends Component {
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

function mapDispatchToProps(dispatch) {
    return {
        dispatchNavigate: (screen) => dispatch(navigate(screen))
    };
}

export default connect(null, mapDispatchToProps)(NewListButton);