import { v4 as Id } from 'uuid';
import Movie from '../models/movie.js';

const movieControllers = {
    getAllMovies: (req, res) => {
        const movies = Movie.getMovies();
        res.status(200).render('movies', { movies });
    },
    getMovieById: (req, res) => {
        const { id } = req.params;
        const movie = Movie.getMovieById(id);
        if (movie) {
            res.status(200).render('movie', { movie });
        } else {
            res.status(404).render('404', {
                title: 'Movie not found',
                message: 'The movie that you are looking for does not exist'
            });
        }
    },
    addMovieForm: (req, res) => {
        res.status(200).render('add-movie');
    },
    addMovie: (req, res) => {
        const { poster, title, director, year } = req.body;
        if (poster && title && director && year) {
            Movie.addMovie({ id: Id(), poster, title, director, year });
            res.status(201).redirect('/api/get');
        } else {
            res.status(400).render('404', {
                title: 'Invalid input',
                message: 'Please enter valid movie details'
            });
        }
    },
    updateMovie: (req, res) => {},
    deleteMovie: (req, res) => {}
};

export default movieControllers;
