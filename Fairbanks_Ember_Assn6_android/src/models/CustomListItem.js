import keyKeeper from '../utils/KeyKeeper';

export class CustomListItem {
    constructor(name) {
        this.name = name;
        this.id = keyKeeper.getKey();
        this.checked = false;
    }

    setChecked() {
        this.checked = !this.checked;
        return this.checked;
    }

    getItem() {
        return {name: this.name, id: this.id, checked: this.checked}
    }
} 