import {
    ADDACTIVITY
} from './constants';

export function addActivity(activity) {
    return {
        type: ADDACTIVITY,
        activity: activity
    };
}