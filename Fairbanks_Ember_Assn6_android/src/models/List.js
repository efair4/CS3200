import keyKeeper from '../utils/KeyKeeper';

export class List {
    constructor(listName, iconName) {
        this.listName = listName;
        this.iconName = iconName;
        this.id = keyKeeper.getKey();
        this.listItems = [];
    }

    getListName() {
        return this.listName;
    }

    getIconName() {
        return this.iconName;
    }
}