import apiService from './api.service';
import { Movie } from '../models/Movie';
import { Person } from '../models/Person';
import { Genre } from '../models/Genre';

let MovieService = class MovieService {
    constructor() {
    }

    getGenres() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getGenreList())
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.genres === undefined) {
                    resolve([]);
                }
                else {
                    let items = [];
                    responseJson.genres.forEach(element => {
                        items.push(new Genre (element.name, element.id));
                    });
                    resolve(items);
                }
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getMovies(page, id) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMovieList(page, id))
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.results === undefined) {
                    resolve([]);
                }
                else {
                    let items = [];
                    responseJson.results.forEach(element => {
                        items.push(new Movie (element.title, element.id, element.popularity, element.release_date, element.overview, element.poster_path));
                    });
                    resolve({items: items, totalPages: responseJson.total_pages});
                }
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getMovie(id) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMovie(id))
            .then((response) => response.json())
            .then((responseJson) => {
                let info = {genres: responseJson.genres, budget: responseJson.budget, revenue: responseJson.revenue, status: responseJson.status};
               resolve(info);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getMovieCredits(id) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMovieCredits(id))
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.cast === undefined) {
                    resolve([]);
                }
                else {
                    let info = [];
                    responseJson.cast.forEach(element => {
                        info.push({id: element.id, characterName: element.character});
                    });
                    resolve(info);
                }
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getPerson(id) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getPerson(id))
            .then((response) => response.json())
            .then((responseJson) => {
                let info = {birthday: responseJson.birthday, deathday: responseJson.deathday, birthplace: responseJson.place_of_birth, biography: responseJson.biography};
               resolve(info);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getPersonInfo(info) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getPerson(info.id))
            .then((response) => response.json())
            .then((responseJson) => {
                let personInfo = new Person(responseJson.name, responseJson.id, responseJson.popularity, responseJson.profile_path);
               resolve({person: personInfo, character: info.characterName});
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getPersonCredits(id) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getPersonCredits(id))
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.cast === undefined) {
                    resolve([]);
                }
                else {
                    let info = [];
                    responseJson.cast.forEach(element => {
                        info.push(new Movie (element.title, element.id, element.popularity, element.release_date, element.overview, element.poster_path));
                    });
                    resolve(info);
                }
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    performSearch(page, searchString) {
        return new Promise((resolve, reject) => {
            fetch(apiService.performSearch(page, searchString))
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.results === undefined) {
                    resolve({items: []});
                }
                else {
                    let items = [];
                    responseJson.results.forEach(element => {
                        if(element.media_type == 'movie') {
                            items.push(new Movie (element.title, element.id, element.popularity, element.release_date, element.overview, element.poster_path));
                        }
                        else if(element.media_type == 'person') {
                            items.push(new Person (element.name, element.id, element.popularity, element.profile_path));
                        }
                    });
                    resolve({items: items, totalPages: responseJson.total_pages});
                }
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
};

const movieService = new MovieService();
export default movieService;