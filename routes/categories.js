const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

/* GET home page. */

router.get('/', csrfProtection, async(req, res) => {
	const categories = await db.Category.findAll()

	res.render('category', { categories });
});

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
	const questionId = parseInt(req.params.id, 10);

	const categoryQuestions = await db.Question.findAll({
			where: { categoryId: questionId}
		})
	const categories = await db.Category.findAll({
		where: { id: questionId },
		raw:true
	})

	const categoryName = categories[0].name
	res.render('categoryHome', { categoryQuestions, categoryName });
}));


module.exports = router;
