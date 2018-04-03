import {
    SETLISTS,
    SETCURRENTLIST,
    ADDLIST,
    ADDITEM,
    DELETEITEM,
    DELETELIST,
    CHECKITEM
} from './constants';

export function setLists(lists) {
    return {
        type: SETLISTS,
        lists: lists
    };
}

export function setCurrentList(list) {
    return {
        type: SETCURRENTLIST,
        list: list
    };
}

export function getCurrentList() {
    return {
        type: GETCURRENTLIST
    };
}

export function addList(list) {
    return {
        type: ADDLIST,
        list: list
    };
}

export function addItem(list, item) {
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

export function deleteItem(list, item) {
    return {
        type: DELETEITEM,
        listId: list.id,
        item: item
    };
}

export function checkItem(list, item) {
    return {
        type: CHECKITEM,
        listId: list.id,
        item: item
    }
}