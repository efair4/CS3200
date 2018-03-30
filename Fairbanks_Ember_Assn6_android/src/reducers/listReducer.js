import { AsyncStorage } from 'react-native';
import { 
    ADDITEM,
    ADDLIST,
    DELETEITEM,
    DELETELIST
} from '../actions/constants';

let initialState = {
    lists: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case ADDLIST:
            var newLists = state.lists;
            newLists += ', ' + action.list;
            AsyncStorage.mergeItem('lists', JSON.stringify(action.list))
            .then((response) => response.json())
            .then((responseJson) => {
                JSON.parse(AsyncStorage.getItem('lists'))
                .then((response) => {

                })
            })
            .catch((error) => {
                console.error(error);
            });
            return {lists: newLists};
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
 