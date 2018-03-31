import { AsyncStorage } from 'react-native';
import { 
    ADDITEM,
    ADDLIST,
    DELETEITEM,
    DELETELIST
} from '../actions/constants';

let initialState = {
    lists: [],
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
        case ADDLIST:
            var newLists = JSON.parse(JSON.stringify(state.lists));
            var listObject = action.list.getListObject();
            newLists.push(listObject);
            AsyncStorage.mergeItem('lists', JSON.stringify(listObject[0]))
            .then((response) => response.json())
            .then((responseJson) => {
                JSON.parse(AsyncStorage.getItem('lists'))
                .then((response) => {

                })
            })
            .catch((error) => {
                console.error(error);
            });
            return {lists: newLists, imagePaths: state.imagePaths};
        case ADDITEM:
                if(action.item.length === 0)  {return state;}
                var listToEdit = JSON.parse(JSON.stringify(state.lists.find(list => list.id === action.listId)));
                var index = state.lists.indexOf(listToEdit);
                listToEdit.listItems.push(action.item);
                state.lists[index] = listToEdit;
                return {lists: state.lists, imagePaths: state.imagePaths};
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
 