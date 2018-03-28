
import { 
    NAVIGATE,
    POPSCREEN,
    ADDITEM,
    ADDLIST,
    DELETEITEM,
    DELETELIST
} from '../actions/constants';

let initialState = {
    lists: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case NAVIGATE:
            state.navigation.navigate(action.screen);
            return state;
        case POPSCREEN:
            state.navigation.goBack();
            return state;
        case ADDLIST:
            state.navigation.pop();
            return {lists: state.lists.append(action.list)};
        case ADDITEM:
            return {lists: () => {
                var listToEdit = state.lists.find(list => list.id === action.listId);
                listToEdit.append(action.item);
                var index = state.lists.indexOf(listToEdit);
                state.lists[index] = listToEdit;
                return state.lists;
            }}
        case DELETEITEM:
            return {lists: () => {
                var listToEdit = state.lists.find(list => list.id === action.listId);
                var itemIndex = listToEdit.indexOf(action.item);
                listToEdit.splice(itemIndex,1);
                var listIndex = state.lists.indexOf(listToEdit);
                state.lists[listIndex] = listToEdit;
                return state.lists;
            }}
        default:
            return state;
    };
};
 