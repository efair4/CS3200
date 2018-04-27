import keyKeeper from '../utils/KeyKeeper';

export class Activity {
    constructor(type, numTrips, photos) {
        this.type = type;
        this.numTrips = numTrips;
        this.photos = photos,
        this.dateCreated = Date.now();
        this.id = keyKeeper.getKey();
    }
}