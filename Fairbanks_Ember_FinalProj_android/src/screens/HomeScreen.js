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
    Card,
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
                <List 
                style={{width: '100%'}}
                dataArray={this.props.recentActivities}
                    renderRow={(item) => {
                        var header = this.getHeader(item);
                        var tripsWord;
                        var photosPhrase;
                        if(item.activity.numTrips > 1) {
                            tripsWord = 'trips';
                        }
                        else {
                            tripsWord = 'trip';
                        }
                        if(item.activity.photos.length == 0) {
                            photosPhrase = ''
                        }
                        else if(item.activity.photos.length == 1){
                            photosPhrase = 'You added one photo for this trip!';
                        }
                        else  {
                            photosPhrase = 'You added '+ item.activity.photos.length + ' photos for this trip!';
                        }
                        return(
                            <Card 
                                style={{flexDirection: 'column', width: '100%'}}
                                onPress={() => this.props.navigation.navigate('EditActivityScreen', {activity: item})}
                            >
                                <Text style={styles.listItemHeader}>{header}</Text>
                                <Text style={styles.listItem}>You saved {item.activity.numTrips} {tripsWord}!</Text>
                                <Text style={styles.listItem}>{photosPhrase}</Text>
                            </Card>
                        )
                    }}
                />
            </Content>
        );
    }

    getHeader(item) {
        switch(item.activity.type) {
            case 'active':
                return 'Active Transportation Trip';
            case 'public':
                return 'Public Transportation Trip';
            case 'carpool':
                return 'Carpooling Trip';
            case 'tripchain':
                return 'Trip Chaining';
            default:
                return '';
        }
    }
}

const mapStateToProps = (state) => {
    return {
        recentActivities: state.recentActivities
    };
}

export default connect(mapStateToProps)(HomeScreen);