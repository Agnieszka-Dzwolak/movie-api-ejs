import express from 'express';
import dotenv from 'dotenv';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import createLog from './middleware/createLog.js';

import movieRoutes from './routes/movieRoutes.js';

//load environment variables
dotenv.config();

const PORT = process.env.PORT || 5004;

const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

//initialize express
const app = express();

//set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve static files
app.use(express.static(path.join(PATH, 'public')));

//middleware
app.use(createLog);

//routes
app.use('/api', movieRoutes);

// handle 404
app.use('*', (req, res) => {
    res.status(404).render('404', {
        title: '404 Page not found',
        message: 'Ops.., something went wrong'
    });
});

//handle error
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render('500', {
        title: '500 Error',
        message: 'Internal Server Error'
    });
});

//listen
app.listen(PORT, () => {
    console.log(`Server is up and running on port http://localhost:${PORT}`);
});
