const BookInstance = require('../models/bookinstance');

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
exports.bookinstance_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id);
};

// Display bookinstance create form on GET
exports.bookinstance_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle bookinstance create on POST
exports.bookinstance_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: BookInstance create POST');
};

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
