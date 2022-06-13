const express = require('express');
const router = express.Router();
const { index } = require('../controllers/bookController');

/* GET home page. */
router.get('/', index);

module.exports = router;
