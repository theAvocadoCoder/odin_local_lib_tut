const express = require('express');
const router = express.Router();

/* GET catalog listing. */
router.get('/', function(req, res, next) {
  res.render('catalog', { title: 'Catalog', catalog: ['book', 'book instance', 'author', 'genre'], url: ['/catalog/book', '/catalog/bookinstance', '/catalog/author', '/catalog/genre'] });
});

router.use('/book', function(req, res, next) {
  res.send('book');
});

router.use('/bookinstance', function(req, res, next) {
  res.send('bookInstance');
});

router.use('/author', function(req, res, next) {
  res.send('author');
});

router.use('/genre', function(req, res, next) {
  res.send('genre');
});

module.exports = router;
