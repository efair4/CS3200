import {
    NAVIGATE
} from './constants';

export function navigate(screen) {
    return {
        type: NAVIGATE,
        screen: screen
    };
}