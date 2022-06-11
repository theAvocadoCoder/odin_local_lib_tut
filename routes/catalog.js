const express = require('express');
const router = express.Router();

// Require controller modules
const bookController = require('../controllers/bookController');
const authorController = require('../controllers/authorController');
const genreController = require('../controllers/genreController');
const bookInstanceController = require('../controllers/bookInstanceController');

/**
 *  BOOK ROUTES 
 */

// GET catalog home page.
router.get('/', bookController.index);

// GET request for creating a Book
router.get('/book/create', bookController.book_create_get);

// POST request for creating a Book
router.post('/book/create', bookController.book_create_post);

// GET request to delete a Book
router.get('/book/:id/delete', bookController.book_delete_get);

// POST request to delete a Book
router.post('/book/:id/delete', bookController.book_delete_post);

// GET request to update a Book
router.get('/book/:id/delete', bookController.book_update_get);

// POST request to update a Book
router.post('book/:id/update', bookController.book_update_post);

// GET request for one Book
router.get('/book/:id', bookController.book_detail);

// GET request for list of all Book items
router.get('/books', bookController.book_list);

/**
 * AUTHOR ROUTES
 */

// GET request for creating a Author
router.get('/author/create', authorController.author_create_get);

// POST request for creating a Author
router.post('/author/create', authorController.author_create_post);

// GET request to delete a Author
router.get('/author/:id/delete', authorController.author_delete_get);

// POST request to delete a Author
router.post('/author/:id/delete', authorController.author_delete_post);

// GET request to update a Author
router.get('/author/:id/delete', authorController.author_update_get);

// POST request to update a Author
router.post('author/:id/update', authorController.author_update_post);

// GET request for one Author
router.get('/author/:id', authorController.author_detail);

// GET request for list of all Author items
router.get('/authors', authorController.author_list);

/**
 * GENRE ROUTES
 */

// GET request for creating a Genre
router.get('/genre/create', genreController.genre_create_get);

// POST request for creating a Genre
router.post('/genre/create', genreController.genre_create_post);

// GET request to delete a Genre
router.get('/genre/:id/delete', genreController.genre_delete_get);

// POST request to delete a Genre
router.post('/genre/:id/delete', genreController.genre_delete_post);

// GET request to update a Genre
router.get('/genre/:id/delete', genreController.genre_update_get);

// POST request to update a Genre
router.post('genre/:id/update', genreController.genre_update_post);

// GET request for one Genre
router.get('/genre/:id', genreController.genre_detail);

// GET request for list of all Genre items
router.get('/genres', genreController.genre_list);

/**
 * BOOKINSTANCE ROUTES
 */

// GET request for creating a BookInstance
router.get('/bookinstance/create', bookInstanceController.bookinstance_create_get);

// POST request for creating a BookInstance
router.post('/bookinstance/create', bookInstanceController.bookinstance_create_post);

// GET request to delete a BookInstance
router.get('/bookinstance/:id/delete', bookInstanceController.bookinstance_delete_get);

// POST request to delete a BookInstance
router.post('/bookinstance/:id/delete', bookInstanceController.bookinstance_delete_post);

// GET request to update a BookInstance
router.get('/bookinstance/:id/delete', bookInstanceController.bookinstance_update_get);

// POST request to update a BookInstance
router.post('bookinstance/:id/update', bookInstanceController.bookinstance_update_post);

// GET request for one BookInstance
router.get('/bookinstance/:id', bookInstanceController.bookinstance_detail);

// GET request for list of all BookInstance items
router.get('/bookinstances', bookInstanceController.bookinstance_list);


module.exports = router;
