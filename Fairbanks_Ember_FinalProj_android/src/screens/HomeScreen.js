import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    Text,
    TouchableOpacity,
    FlatList,
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

import styles from '../styles/Styles';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.homeContainer}>
                {this.props.recentActivities.length != 0 ? this._renderRecents() : <Text style={styles.infoText}> You don't have any recent trips. Tap the button below to add one! </Text>}
                <TouchableOpacity style={styles.addActivityButton}
                onPress={() => this.props.navigation.navigate('AddActivityScreen')}
                >
                    <Text style={styles.addActivityText}>
                        Add a Trip Saving Activity!
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    _renderRecents() {
        return(
            <Content>
                <List dataArray={this.props.recentActivities}
                    renderRow={(item) => {
                        return(
                            <ListItem 
                                onPress={() => this.props.navigation.navigate('EditActivityScreen', {activity: item})}
                            >
                            </ListItem>
                        )
                    }}
                />
            </Content>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recentActivities: state.recentActivities
    };
}

export default connect(mapStateToProps)(HomeScreen);