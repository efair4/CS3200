import keyKeeper from '../utils/KeyKeeper';

export class ListItem {
    constructor(item, id) {
        this.item = item;
        this.id = id;
        this.checked = false;
    }

    getItem() {
        return {item: this.item, id: this.id, checked: this.checked}
    }
} 