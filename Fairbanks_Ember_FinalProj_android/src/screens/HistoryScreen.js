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

class HistoryScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.recentActivities.length != 0 ? this._renderRecents() : <Text> You don't have any recent trips. Tap the button below to add one! </Text>}
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

export default connect(mapStateToProps)(HistoryScreen);