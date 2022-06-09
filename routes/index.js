const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

/* GET home page. */

router.get('/', csrfProtection, async(req, res) => {
	const questions = await db.Question.findAll()

	res.render('questions', { questions });
});

module.exports = router;
