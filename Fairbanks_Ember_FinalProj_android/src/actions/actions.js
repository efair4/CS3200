import {
    ADDACTIVITY,
    SAVESETTINGS,
    SETINFO
} from './constants';

export function addActivity(activity) {
    return {
        type: ADDACTIVITY,
        activity: activity
    };
}

export function setInfo(info) {
    return {
        type: SETINFO,
        info: info
    };
}

export function saveSettings(username, address, goals) {
    return {
        type: SAVESETTINGS,
        username: username,
        address: address,
        goals: goals
    }
}