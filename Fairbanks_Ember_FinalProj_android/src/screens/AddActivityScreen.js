import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Alert,
    View
} from 'react-native';
import {
	Content,
	List,
    ListItem,
    Right,
    Left,
    Body
} from 'native-base';
import CameraKitCamera from 'react-native-camera-kit';
import styles from '../styles/Styles';

class AddActivityScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                          
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recentActivities: state.recentActivities
    };
}

export default connect(mapStateToProps)(AddActivityScreen);