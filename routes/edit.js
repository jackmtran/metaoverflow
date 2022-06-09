const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');

router.get('/', function (req, res, next) {
	res.render('edit', { title: 'MetaOverflow' });
});

module.exports = router;
