import {AsyncStorage} from 'react-native';
import { 
    ADDACTIVITY,
    SAVESETTINGS,
    SETINFO,
 } from '../actions/constants';
import keyKeeper from '../utils/KeyKeeper';

const TIMELIMIT = 172800000; //48 hrs in milliseconds
let initialState = {
    firstTime: true,
    loadingInfo: true,
    pubTaken: false,
    tripsSaved: 4,
    recentActivities: [],
    allActivities: [],
    username: 'Ember',
    address: "777 E 1000 N, Apt K3, Logan Utah",
    goals: {totalTrips: 15, activeTrips: 5, pubTrips: 10},
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SETINFO: 
            var actionInfo = [state.recentActivities,
                                state.allActivities,
                                state.username,
                                state.address,
                                state.goals,
                                state.tripsSaved];
            var parsedInfo = getParsedInfo(actionInfo, action);
            
            return Object.assign({}, state, {
                recentActivities: checkRecents(parsedInfo[0]), 
                allActivities: parsedInfo[1], 
                username: parsedInfo[2], 
                address: parsedInfo[3], 
                goals: parsedInfo[4], 
                tripsSaved: parsedInfo[5], 
                loadingInfo: false
            });
        case ADDACTIVITY:
            var newState = Object.assign({}, state, {
                allActivities: addActivity(state.allActivities, action),
                recentActivities: addRecent(state.recentActivities, action),
                totalTrips: state.totalTrips + action.activity.numTrips,
                photosCount: state.photosCount + action.activity.photos.length,
                pubTaken: action.activityType == 'public' ? true : state.pubTaken
            });
            //AsyncStorage.setItem('state', newState);
            return newState;
        case SAVESETTINGS: 
            AsyncStorage.setItem('username', action.username);
            AsyncStorage.setItem('address', action.address);
            AsyncStorage.setItem('goals', JSON.stringify(action.goals));
            return Object.assign({}, state, {
                recentActivities: state.recentActivities, 
                username: action.username, 
                address: action.address, 
                goals: action.goals
            });
        default:
            return state;
    };
};

function getParsedInfo(actionInfo, action) {
    if(action.info[0] != null) {
        actionInfo[0] = JSON.parse(action.info[0]);
    }                    
    if(action.info[1] != null) {
        actionInfo[1] = JSON.parse(action.info[1]);
    }
    if(action.info[2] != null) {
        actionInfo[2] = action.info[2];
    }
    if(action.info[3] != null) {
        actionInfo[3] = action.info[3];
    }
    if(action.info[4] != null) {
        actionInfo[4] = JSON.parse(action.info[4]);
    }
    if(action.info[5] != null) {
        actionInfo[5] = action.info[5];
    }
    return actionInfo;
}

function addActivity(activities, action) {
    return [
        ...activities,
        {
            activity: action.activity
        }
    ]
}

function addRecent(recents, action) {
    return [
        ...recents,
        {
            activity: action.activity
        }
    ]
}

function checkRecents(recents) {
    var newRecents = [];
    var now = Date.now();
    recents.forEach(function(recent) {
        if((recent.activity.dateCreated.getTime() - now.getTime()) < TIMELIMIT) {
            newRecents.push(recent);
        }
    });
    return newRecents;
}