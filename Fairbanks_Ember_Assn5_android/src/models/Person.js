//Class describing a single Person

export class Person {
    constructor(name, id, popularity, imagePath) {
        this.name = name;
        this.id = id
        this.popularity = popularity;
        if(imagePath == null) {
            this.imagePath == null;
        }
        else {
            this.imagePath = 'https://image.tmdb.org/t/p/w500' + imagePath;
        }
    }

    getName() {
        return this.name;
    }

    getInfo() {
        return {name: this.name, id: this.id, popularity: this.popularity, imagePath: this.imagePath};
    }
}