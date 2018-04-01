import { AsyncStorage } from 'react-native';
import { 
    SETLISTS,
    ADDITEM,
    ADDLIST,
    DELETEITEM,
    DELETELIST
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
            console.log('list object');
            console.log(listObject);
            newLists.push(listObject);
            AsyncStorage.setItem('lists', JSON.stringify(newLists))
            return {lists: newLists, imagePaths: state.imagePaths};
        case ADDITEM:
            if(action.item.length === 0)  {return state;}
            var listToEdit = JSON.parse(JSON.stringify(state.lists.find(list => list.id === action.listId)));
            var index = state.lists.findIndex(list => list.id == listToEdit.id);
            listToEdit.listItems.push(action.item);
            var stateCopy = JSON.parse(JSON.stringify(state.lists));
            stateCopy.lists[index] = listToEdit;
            AsyncStorage.setItem('lists', JSON.stringify(stateCopy.lists))
            return {lists: stateCopy.lists, imagePaths: state.imagePaths};
        case DELETELIST:
            var listIndex = state.lists.findIndex(list => list.id == listToEdit.id);
            var stateCopy = JSON.parse(JSON.stringify(state.lists));
            stateCopy.lists.splice(listIndex, 1);
            AsyncStorage.setItem('lists', JSON.stringify(stateCopy.lists));
            return {lists: stateCopy.lists, imagePaths: state.imagePaths};
        case DELETEITEM:
            var listToEdit = state.lists.find(list => list.id === action.listId);
            var itemIndex = listToEdit.findIndex(item => item.id == action.item.id);
            listToEdit.splice(itemIndex,1);
            var listIndex = state.lists.findIndex(list => list.id == listToEdit.id);
            var stateCopy = JSON.parse(JSON.stringify(state.lists));
            stateCopy.lists[listIndex] = listToEdit;
            AsyncStorage.setItem('lists', JSON.stringify(stateCopy.lists))
            return {lists: stateCopy.lists, imagePaths: state.imagePaths};
        default:
            return state;
    };
};