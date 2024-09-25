import express from 'express';

import movieControllers from '../controllers/movieControllers.js';

const router = express.Router();

const {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovieForm,
    updateMovie,
    deleteMovie,
    addMovieForm
} = movieControllers;

router.get('/get', getAllMovies);
router.get('/get/:id', getMovieById);
//add movie
router.get('/add', addMovieForm);
router.post('/add', addMovie);
//update movie
router.get('/update-form/:id', updateMovieForm);
router.post('/update/:id', updateMovie);
//delete movie
router.get('/delete/:id', deleteMovie);

export default router;
