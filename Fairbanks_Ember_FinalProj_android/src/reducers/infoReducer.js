import {AsyncStorage} from 'react-native';
import { 
    ADDACTIVITY,
    SAVESETTINGS,
 } from '../actions/constants';

let initialState = {
    recentActivities: [],
    username: 'Ember',
    address: {line1: '777 E 1000 N', line2: 'Apt K3', city: 'Logan', state: 'Utah'},
    goals: {totalTrips: 8, activeTrips: 5, pubTrips: 10},
};

export default function(state = initialState, action) {
    switch(action.type) {
        case ADDACTIVITY:
            return state;
        case SAVESETTINGS: 
            AsyncStorage.setItem('username', action.username);
            AsyncStorage.setItem('address', JSON.stringify(action.address));
            AsyncStorage.setItem('goals', JSON.stringify(action.goals));
            return {username: action.username, address: action.address, goals: action.goals};
        default:
            return state;
    };
};