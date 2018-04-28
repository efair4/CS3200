export class Activity {
    constructor(type, numTrips, numPass, numDest, photos, dateCreated, id) {
        this.type = type;
        this.numTrips = numTrips;
        this.numPassengers = numPass;
        this.numDestinations = numDest;
        this.photos = photos,
        this.dateCreated = dateCreated;
        this.id = id;
    }
}