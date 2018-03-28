import {
    NAVIGATE,
    ADDLIST,
    ADDITEM,
    DELETEITEM,
    DELETELIST,
    POPSCREEN
} from './constants';

export function navigate(screen) {
    return {
        type: NAVIGATE,
        screen: screen
    };
}

export function popScreen() {
    return {
        type: POPSCREEN
    };
}

export function addList(list) {
    return {
        type: ADDLIST,
        list: list
    };
}

export function addItem(item, list) {
    return {
        type: ADDITEM,
        listId: list.id,
        item: item
    };
}

export function deleteList(list) {
    return {
        type: DELETELIST,
        listId: list.id
    }
}

export function deleteItem(item, list) {
    return {
        type: DELETEITEM,
        listId: list.id,
        item: item
    };
}