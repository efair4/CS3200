import keyKeeper from '../utils/KeyKeeper';

export class List {
    constructor(listName, icon, dateCreated) {
        this.listName = listName;
        this.icon = icon;
        this.dateCreated = dateCreated;
        this.id = keyKeeper.getKey();
        this.listItems = [];
    }

    getListObject() {
        return {listName: this.listName, icon: this.icon, dateCreated: this.dateCreated, id: this.id, listItems: this.listItems};
    }
}