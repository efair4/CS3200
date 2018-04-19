import {AsyncStorage} from 'react-native';
import { ADDACTIVITY } from '../actions/constants';

let initialState = {
    recentActivities: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case ADDACTIVITY:
            return state;
        default:
            return state;
    };
};