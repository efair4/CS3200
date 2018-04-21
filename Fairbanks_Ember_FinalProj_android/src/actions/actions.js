import {
    ADDACTIVITY,
    SAVESETTINGS,
} from './constants';

export function addActivity(activity) {
    return {
        type: ADDACTIVITY,
        activity: activity
    };
}

export function saveSettings(name, address, goals) {
    return {
        type: SAVESETTINGS,
        name: name,
        address: address,
        goals: goals
    }
}