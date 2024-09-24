import express from 'express';

import movieControllers from '../controllers/movieControllers.js';

const router = express.Router();

const {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie,
    addMovieForm
} = movieControllers;

router.get('/get', getAllMovies);
router.get('/get/:id', getMovieById);
router.get('/add', addMovieForm);
router.post('/add', addMovie);
router.put('/update/:id', updateMovie);
router.delete('/delete/:id', deleteMovie);

export default router;
