import {AsyncStorage} from 'react-native';
import { 
    ADDACTIVITY,
    SAVESETTINGS,
    SETINFO,
    DELETEACTIVITY,
    UPDATETROPHIES,
    UPDATEGOALS
 } from '../actions/constants';
import keyKeeper from '../utils/KeyKeeper';
import { ActionSheet } from 'native-base';

const TIMELIMIT = 172800000; //48 hrs in milliseconds
let initialState = {
    pubTrips: 0,
    activeTrips: 0,
    photosCount: 0,
    tripsSaved: 4,
    recentActivities: [],
    allActivities: [],
    username: 'Ember',
    address: "777 E 1000 N, Apt K3, Logan Utah",
    goals: {totalTrips: 15, activeTrips: 5, pubTrips: 10},
    goalsAccomplished: {totalTrips: false, activeTrips: false, pubTrips: false},
    trophies: {tenth: false, fiftieth: false, firstPub: false, fivePhotos: false}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SETINFO: 
            if(action.info == null) {
                return state;
            }
            
            return action.info;

        case ADDACTIVITY:
            var newState = Object.assign({}, state, {
                allActivities: addActivity(state.allActivities, action),
                recentActivities: addRecent(state.recentActivities, action),
                tripsSaved: state.tripsSaved + action.activity.numTrips,
                photosCount: state.photosCount + action.activity.photos.length,
                pubTrips: action.activity.type == 'public' ? state.pubTrips + 1 : state.pubTrips,
                activeTrips: action.activity.type == 'active' ? state.activeTrips + 1 : state.activeTrips
            });
            AsyncStorage.setItem('state', JSON.stringify(newState));
            return newState;

        case DELETEACTIVITY:
            var newState = Object.assign({}, state, {
                allActivities: deleteActivity(state.allActivities, action),
                recentActivities: deleteRecent(state.recentActivities, action),
                tripsSaved: state.tripsSaved - action.activity.numTrips,
                photosCount: state.photosCount - action.activity.photos.length,
                pubTrips: action.activity.type == 'public' ? state.pubTrips - 1 : state.pubTrips,
                activeTrips: action.activity.type == 'active' ? state.activeTrips - 1 : state.activeTrips
            });
            AsyncStorage.setItem('state', JSON.stringify(newState));
            return newState;

        case SAVESETTINGS: 
            var newState = Object.assign({}, state, {
                username: action.username, 
                address: action.address, 
                goals: action.goals
            });
            AsyncStorage.setItem('state', JSON.stringify(newState));
            return newState;
        
        case UPDATETROPHIES:
            var newState = Object.assign({}, state, {
                trophies: action.trophies,
            });
            AsyncStorage.setItem('state', JSON.stringify(newState));
            return newState;

        case UPDATEGOALS:
            var newState = Object.assign({}, state, {
                goalsAccomplished: action.goalsAccomplished,
            });
            AsyncStorage.setItem('state', JSON.stringify(newState));
            return newState;

        default:
            return state;
    };
};

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

function deleteActivity(activities, action) {
    var activityIndex = activities.findIndex(activity => activity.id == action.activity.id);
    activities.splice(activityIndex, 1);
    return activities;
}

function deleteRecent(recents, action) {
    var activityIndex = recents.findIndex(activity => activity.id == action.activity.id);
    recents.splice(activityIndex, 1);
    return recents;
}

function checkRecents(recents) {
    var newRecents = [];
    var now = Date.now();
    recents.forEach(function(recent) {
        if((recent.activity.dateCreated.now() - now) < TIMELIMIT) {
            newRecents.push(recent);
        }
    });
    return newRecents;
}


// function getParsedInfo(actionInfo, action) {
//     if(action.info[0] != null) {
//         actionInfo[0] = JSON.parse(action.info[0]);
//     }                    
//     if(action.info[1] != null) {
//         actionInfo[1] = JSON.parse(action.info[1]);
//     }
//     if(action.info[2] != null) {
//         actionInfo[2] = action.info[2];
//     }
//     if(action.info[3] != null) {
//         actionInfo[3] = action.info[3];
//     }
//     if(action.info[4] != null) {
//         actionInfo[4] = JSON.parse(action.info[4]);
//     }
//     if(action.info[5] != null) {
//         actionInfo[5] = action.info[5];
//     }
//     return actionInfo;
// }