import {
    ADDACTIVITY,
    DELETEACTIVITY,
    SAVESETTINGS,
    SETINFO,
    UPDATETROPHIES,
    UPDATEGOALS
} from './constants';

export function addActivity(activity) {
    return {
        type: ADDACTIVITY,
        activity: activity
    };
}

export function deleteActivity(activity) {
    return {
        type: DELETEACTIVITY,
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

export function updateTrophiesGoals(trophies, goals) {
    return {
        type: UPDATETROPHIES,
        trophies: trophies
    }
}

export function updateGoalsAccomplished(goals) {
    return {
        type: UPDATEGOALS,
        goals: goals
    }
}