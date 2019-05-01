const express = require('express');
const router = express.Router();

// @route   GET api/postss/test
// @desc    Tests postss route
// @access  Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
