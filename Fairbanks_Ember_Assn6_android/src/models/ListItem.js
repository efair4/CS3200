import keyKeeper from '../utils/KeyKeeper';

export class ListItem {
    constructor(name) {
        this.name = name;
        this.id = keyKeeper.getKey();
        this.checked = false;
    }

    getItem() {
        return {name: this.name, id: this.id, checked: this.checked}
    }
} 