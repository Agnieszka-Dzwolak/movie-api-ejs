import findMovie from '../utils/findMovie.js';

let movies = [
    {
        id: '1',
        poster: 'https://m.media-amazon.com/images/I/51aHfqvu3-L._AC_.jpg',
        title: 'Superbad',
        director: 'Greg Mottola',
        year: 2007
    },
    {
        id: '2',
        poster: 'https://images.fineartamerica.com/images/artworkimages/medium/3/the-hangover-movie-poster-essencejac-kowski.jpg',
        title: 'The Hangover',
        director: 'Todd Phillips',
        year: 2009
    },
    {
        id: '3',
        poster: 'https://m.media-amazon.com/images/I/71Ugnbh19qL.jpg',
        title: 'Groundhog Day',
        director: 'Harold Ramis',
        year: 1993
    }
];

class Movie {
    static getMovies = () => {
        return movies;
    };

    static getMovieById = (id) => {
        return findMovie(movies, id);
    };

    static addMovie = (movie) => {
        movies.push(movie);
        return movies;
    };

    static updateMovie = (id, movie) => {
        const movieExist = findMovie(movies, id);
        if (movieExist) {
            movieExist.poster = movie.poster;
            movieExist.title = movie.title;
            movieExist.director = movie.director;
            movieExist.year = movie.year;
        } else {
            return null;
        }
    };

    static deleteMovie = (id) => {
        const movieExist = findMovie(movies, id);
        if (movieExist) {
            movies = movies.filter((movie) => movie.id !== id);
            return movies;
        } else {
            return null;
        }
    };
}

export default Movie;
