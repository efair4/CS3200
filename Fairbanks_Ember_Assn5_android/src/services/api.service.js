//API Key: 8d59b4666a355345e245681f2ca2c0fa


let ApiService = class ApiService {
    constructor() {
        this.apiProtocol = 'https:';
        this.apiHost = 'api.themoviedb.org/3/';
        this.apiKey = '8d59b4666a355345e245681f2ca2c0fa';
    }

    //Utility Methods
    get apiLocation() {
        return this.apiProtocol + '//' + this.apiHost;
    }
    
    get imageBaseUrl() {
        return 'https://image.tmdb.org/t/p/w500';
    }

    get keyStuff() {
        return '?api_key=' + this.apiKey+ '&language=en-US';
    }

    get adultInfo() {
        return 'include_adult=false&include_video=false';
    }

    //API calls
    getGenreList() {
        return this.apiLocation + 'genre/movie/list' + this.keyStuff;
    }

    getMovieList(page, genreId) {
        return this.apiLocation + 'discover/movie' + this.keyStuff + '&sort_by=popularity.desc&' +
         this.adultInfo + 'page=' + page + '&with_genres=' + genreId;
    }

    getMovie(id) {
        return this.apiLocation + 'movie/' + id + this.keyStuff;
    }

    getMovieCredits(id) {
        return this.apiLocation + 'movie/' + id + '/credits' + this.keyStuff;
    }

    getPerson(id) {
        return this.apiLocation + 'person/' + id + this.keyStuff;
    }

    getPersonCredits(id) {
        return this.apiLocation + 'person/' + id + '/movie_credits' + this.keyStuff;
    }

    performSearch(page, searchString) {
        return this.apiLocation + 'search/multi' + this.keyStuff + '&query=' 
        + searchString + '&page=' + page + '&include_adult=false';
    }
};

const apiService = new ApiService();
export default apiService;