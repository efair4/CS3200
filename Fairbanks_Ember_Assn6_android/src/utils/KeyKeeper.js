//This simply gives a key value for list items

let KeyKeeper = class KeyKeeper {
    constructor() {
        this.key = 0;
    }

    getKey() {
        this.key += 1;
        return this.key.toString();
    }
}

const keyKeeper = new KeyKeeper();
export default keyKeeper;