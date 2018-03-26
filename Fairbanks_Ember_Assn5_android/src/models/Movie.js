//Class to describe a single Movie

export class Movie {
    constructor(title, id, popularity, releaseDate, overview, posterPath) {
        this.title = title;
        this.id = id;
        this.popularity = popularity;
        this.releaseDate = releaseDate;
        this.overview = overview
        if(posterPath == null) {
            this.imagePath == null;
        }
        else {
            this.imagePath = 'https://image.tmdb.org/t/p/w500' + posterPath;
        }
    }

    getName() {
        return this.title;
    }

    getInfo() {
        return {name: this.title, id: this.id, overview: this.overview, popularity: this.popularity, releaseDate: this.releaseDate, imagePath: this.imagePath};
    }
}