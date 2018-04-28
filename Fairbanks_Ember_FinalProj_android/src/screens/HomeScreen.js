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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/Styles';
import { deleteActivity, updateTrophies, updateGoals } from '../actions/actions';

class HomeScreen extends Component {
    componentWillReceiveProps(newProps) {
        this._checkTrophies(newProps);
        this._checkGoals(newProps);
    }

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
            <Content style={{width: '100%'}}>
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
                            <ListItem 
                                onPress={() => this.props.navigation.navigate('EditActivityScreen', {activity: item.activity})}
                            >
                                <Body>
                                <Text style={styles.listItemHeader}>{header}</Text>
                                <Text style={styles.listItem}>You saved {item.activity.numTrips} {tripsWord}!</Text>
                                <Text style={styles.listItem}>{photosPhrase}</Text>
                                </Body>
                                <Right>
                                    <Icon 
                                        name='delete' 
                                        size={30}
                                        onPress={() => this.props.dispatchDeleteActivity(item.activity)}/>
                                </Right>
                            </ListItem>
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

    _checkTrophies(newProps) {
        var tenthTrophy = newProps.trophies.tenth;
        var fiftiethTrophy = newProps.trophies.fiftieth;
        var publicTrophy = newProps.trophies.firstPub;
        var photosTrophy = newProps.trophies.fivePhotos;
        if(this.newProps.totalTripsCount >= 10 && !tenthTrophy) {
            tenthTrophy = true;
            this._launchAlert('Trophy Earned!', 'You have taken 10 trips total!');
        }
        if(this.newProps.totalTripsCount >= 50 && !fiftiethTrophy) {
            fiftiethTrophy = true;
            this._launchAlert('Trophy Earned!', 'You have taken 50 trips total!');
        }
        if(this.newProps.publicTripsCount >= 1 && !publicTrophy) {
            publicTrophy = true;
            this._launchAlert('Trophy Earned!', 'You took your first public transportation trip!');
        }
        if(this.newProps.photosCount >= 5 && !photosTrophy) {
            photosTrophy = true;
            this._launchAlert('Trophy Earned!', 'You have added 5 photos total!');
        }
        this.props.dispatchUpdateTrophies({tenth: tenthTrophy, fiftieth: fiftiethTrophy, firstPub: publicTrophy, fivePhotos: photosTrophy});
    }

    _checkGoals(newProps) {
        var thisWeekCounts = this._getTripsForWeek(newProps);
        var totalGoal = newProps.goalsAccomplished.totalTrips;
        var activeGoal = newProps.goalsAccomplished.publicTrips;
        var publicGoal = newProps.goalsAccomplished.activeTrips;
        if(thisWeekCounts.total >= newProps.goals.totalTrips && !totalGoal) {
            totalGoal = true;
            this._launchAlert('Goal Accomplished!', 'You met your goal for Total Trips saved!');
        }
        if(thisWeekCounts.public >= newProps.goals.publicTrips && !publicGoal) {
            publicGoal = true;
            this._launchAlert('Goal Accomplished!', 'You met your goal for Public Transportation Trips saved!');
        }
        if(thisWeekCounts.active >= newProps.goals.activeTrips && !activeGoal) {
            activeGoal = true;
            this._launchAlert('Goal Accomplished!', 'You met your goal for Active Transportation Trips saved!');
        }
        this.props.dispatchUpdateGoals({totalTrips: totalGoal, activeTrips: activeGoal, publicTrips: publicGoal});
    }
     _getTripsForWeek(newProps) {
        var today = new Date();
        var weekStart = getMonday(today).now();
        var weekEnd = getSunday(today).now();
        var activeWeekCnt = 0;
        var pubWeekCnt = 0;
        var totalWeekCnt = 0;
        newProps.allActivities.forEach(element => {
            if(element.dateCreated.now() >= weekStart && element.dateCreated.now() <= weekEnd) {
                totalWeekCnt += 1;
                if(element.type == 'public') {
                    pubWeekCnt += 1;
                }
                else if(element.type == 'active') {
                    activeWeekCnt += 1;
                }
            }
        });
        return {total: totalWeekCnt, active: activeWeekCnt, public: pubWeekCnt};
     }

    getMonday(d) {
        var day = d.getDay();
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0?-6:1)-day );
    }

    getSunday(d) {
        var day = d.getDay();
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0?0:7)-day );
    }

    _launchAlert(title, msg) {
        Alert.alert(
            title,
            msg,
                [
                    {text: 'Awesome!', onPress: null},
                ],
                {cancelable: false}
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recentActivities: state.recentActivities,
        goals: state.goals,
        photosCount: state.photosCount,
        totalTripsCount: state.totalTrips.length,
        publicTripsCount: state.publicTrips.length,
        activeTripsCount: state.activeTrips.length,
        trophies: state.trophies,
        goalsAccomplished: state.goalsAccomplished
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchDeleteActivity: (activity) => dispatch(deleteActivity(activity)),
        dispatchUpdateTrophies: (trophies) => dispatch(updateTrophies(trophies)),
        dispatchUpdateGoals: (goals) => dispatch(updateGoalsAccomplished(goals))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);