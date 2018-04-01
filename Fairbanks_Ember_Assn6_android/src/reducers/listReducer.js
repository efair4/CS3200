import { AsyncStorage } from 'react-native';
import { 
    SETLISTS,
    ADDITEM,
    ADDLIST,
    DELETEITEM,
    DELETELIST,
    CHECKITEM
} from '../actions/constants';

let initialState = {
    lists: [],
    loadingLists: true,
    imagePaths: [
        require('../images/Batman.jpg'),
        require('../images/images-5.jpg'),
        require('../images/images-34.jpg'),
        require('../images/images-76.jpg'),
        require('../images/images-101.jpg'),
        require('../images/images-10.jpg'),
        require('../images/images-119.jpg'),
        require('../images/images-110.jpg'),
        require('../images/images-97.jpg'),
        require('../images/images-59.jpg'),
        require('../images/images-38.jpg'),
        require('../images/images-0.jpg')]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SETLISTS:
            return{lists: action.lists, loadingLists: false, imagePaths: state.imagePaths};

        case ADDLIST:
            var newLists = JSON.parse(JSON.stringify(state.lists));
            var listObject = action.list.getListObject();
            newLists.push(listObject);
            AsyncStorage.setItem('lists', JSON.stringify(newLists))
            return {lists: newLists, imagePaths: state.imagePaths};

        case ADDITEM:
            if(action.item.length === 0)  {return state;}
            var listToEdit = JSON.parse(JSON.stringify(state.lists.find(list => list.id === action.listId)));
            var index = state.lists.findIndex(list => list.id == listToEdit.id);
            listToEdit.listItems.push(action.item);
            state.lists[index] = listToEdit;
            AsyncStorage.setItem('lists', JSON.stringify(state.lists))
            return {lists: state.lists, imagePaths: state.imagePaths};

        case DELETELIST:
            var listIndex = state.lists.findIndex(list => list.id == action.listId);
            state.lists.splice(listIndex, 1);
            var stateListsCopy = JSON.parse(JSON.stringify(state.lists));
            AsyncStorage.setItem('lists', JSON.stringify(state.lists));
            return {lists: stateListsCopy, imagePaths: state.imagePaths};

        case DELETEITEM:
            var listToEdit = state.lists.find(list => list.id === action.listId);
            var itemIndex = listToEdit.listItems.indexOf(action.item);
            listToEdit.listItems.splice(itemIndex,1);
            var listIndex = state.lists.findIndex(list => list.id == listToEdit.id);
            state.lists[listIndex] = listToEdit;
            stateListsCopy = JSON.parse(JSON.stringify(state.lists));
            AsyncStorage.setItem('lists', JSON.stringify(state.lists))
            return {lists: stateListsCopy, imagePaths: state.imagePaths};

        case CHECKITEM:
            var listToEdit = state.lists.find(list => list.id === action.listId);
            var itemIndex = listToEdit.listItems.findIndex(item => item.id == action.item.id);
            var checked = action.item.checked;
            action.item.checked = !checked;
            listToEdit.listItems[itemIndex] = action.item;
            var listIndex = state.lists.findIndex(list => list.id == listToEdit.id);
            state.lists[listIndex] = listToEdit;
            stateListsCopy = JSON.parse(JSON.stringify(state.lists));
            AsyncStorage.setItem('lists', JSON.stringify(state.lists))
            return {lists: stateListsCopy, imagePaths: state.imagePaths};

        default:
            return state;
    };
};