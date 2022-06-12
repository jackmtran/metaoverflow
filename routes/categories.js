const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

/* GET home page. */

router.get('/', csrfProtection, async(req, res) => {
	const categories = await db.Category.findAll()

	res.render('category', { categories });
});

router.get('/:id(\\d+)', csrfProtection, async(req, res) => {
	const categoryQuestions = await db.Question.findAll()

	res.render('categoryHome', { categoryQuestions });
});


module.exports = router;
