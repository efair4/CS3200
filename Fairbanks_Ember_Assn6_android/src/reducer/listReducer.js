import { NAVIGATE } from 'constants';

let initialState = {
    lists: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case NAVIGATE:
            state.navigation.navigate(action.screen);
            return state;
        case ADDLIST:
            return {lists: state.lists.append};
        default:
            return state;
    }
}