import {AsyncStorage} from 'react-native';
import { 
    ADDACTIVITY,
    SAVESETTINGS,
    SETINFO,
 } from '../actions/constants';

let initialState = {
    firstTime: true,
    loadingInfo: true,
    recentActivities: [],
    allActivities: [],
    username: 'Ember',
    address: "777 E 1000 N, Apt K3, Logan Utah",//{line1: '777 E 1000 N', line2: 'Apt K3', city: 'Logan', state: 'Utah'},
    goals: {totalTrips: 8, activeTrips: 5, pubTrips: 10},
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SETINFO: 
            var actionInfo = [state.recentActivities,
                                state.allActivities,
                                state.username,
                                state.address,
                                state.goals];
            //for(i = 0; i < actionInfo.length; i++) {
                if(action.info[0] != null) {
                    actionInfo[0] = JSON.parse(action.info[0]);
                }
            //}
            if(action.info[1] != null) {
                actionInfo[1] = JSON.parse(action.info[i]);
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
            return {recentActivities: actionInfo[0], allActivities: actionInfo[1], 
                username: actionInfo[2], address: actionInfo[3], goals: actionInfo[4], loadingInfo: false};
        case ADDACTIVITY:
            return state;
        case SAVESETTINGS: 
            AsyncStorage.setItem('username', action.username);
            AsyncStorage.setItem('address', action.address);
            AsyncStorage.setItem('goals', JSON.stringify(action.goals));
            return {recentActivities: state.recentActivities, username: action.username, address: action.address, goals: action.goals};
        default:
            return state;
    };
};