const BookInstance = require('../models/bookinstance');
const Book = require('../models/book');

const { body, validationResult } = require('express-validator');

// Display list of all bookinstances
exports.bookinstance_list = function(req, res, next) {
  BookInstance.find()
    .populate('book')
    .exec(function (err, bookinstances_list) {
      if (err) { return next(err) }
      // Successful, so render
      res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: bookinstances_list });
    });
};

// Display detail page for a specific bookinstance
exports.bookinstance_detail = function(req, res, next) {
  BookInstance.findById(req.params.id)
    .populate('book')
    .exec(function(err, bookinstance) {
      if (err) { return next(err) }
      if (bookinstance==null) {
        // There are no results
        const err = new Error('Book copy not found');
        err.status = 404;
        return next(err);
      }
      // Successful, so render
      res.render('bookinstance_detail', { title: 'Copy: ' + bookinstance.book.title, bookinstance: bookinstance });
    });
};

// Display bookinstance create form on GET
exports.bookinstance_create_get = function(req, res, next) {
  Book.find({}, 'title')
    .exec(function (err, books) {
      if (err) return next(err);

      // Successful, so render
      const status_list = [
        'Maintenance',
        'Available',
        'Loaned',
        'Reserved',
      ];

      res.render('bookinstance_form', { 
        title: 'Create BookInstance',
        book_list: books,
        status_list: status_list, 
      });
    });
};

// Handle bookinstance create on POST
exports.bookinstance_create_post = [
  // Validate and sanitize fields
  body('book', 'Book must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),

  body('imprint', 'Imprint must be specified')
    .trim()
    .isLength({ min: 1 })
    .escape(),

  body('status').escape(),

  body('due_back', 'Invalid date')
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),

  // Process request after validation and sanitization
  (req, res, next) => {
    // Extract the validation errors from a request
    const errors = validationResult(req);

    // Create a BookInstance object with escaped and trimmed data.
    const bookinstance = new BookInstance({
      book: req.body.book,
      imprint: req.body.imprint,
      status: req.body.status,
      due_back: req.body.due_back,
    });

    const status_list = [
      'Maintenance',
      'Available',
      'Loaned',
      'Reserved',
    ];

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values and error messages
      Book.find({}, 'title')
        .exec(function (err, books) {
          if (err) return next(err);

          // Successful, so render
          res.render('bookinstance_form', { 
            title: 'Create BookInstance',
            book_list: books,
            selected_book: bookinstance.book._id,
            errors: errors.array(),
            bookinstance: bookinstance,
            status_list: status_list,
          });
        });
      return;
    } else {
      // Data from form is valid
      bookinstance.save(function(err) {
        if (err) return next(err);

        // Successful, so redirect to new record
        res.redirect(bookinstance.url);
      });
    }
  }
];

// Display bookinstance delete form on GET
exports.bookinstance_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle bookinstance delete on POST
exports.bookinstance_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display bookinstance update form on GET
exports.bookinstance_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST
exports.bookinstance_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance update POST');
};
