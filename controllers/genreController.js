const Genre = require('../models/genre');

// Display list of all genres
exports.genre_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre list');
};

// Display detail page for a specific genre
exports.genre_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
};

// Display genre create form on GET
exports.genre_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre create GET');
};

// Handle genre create on POST
exports.genre_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre create POST');
};

// Display genre delete form on GET
exports.genre_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle genre delete on POST
exports.genre_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display genre update form on GET
exports.genre_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle genre update on POST
exports.genre_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Genre update POST');
};
