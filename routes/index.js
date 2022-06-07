var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
/* GET home page. */

router.get('/', function (req, res, next) {
	res.render('index', { title: 'MetaOverflow' });
});

module.exports = router;
