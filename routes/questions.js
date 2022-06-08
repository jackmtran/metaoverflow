const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { Question, Category } = require('../db/models')
const { loginUser, logoutUser } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');

router.get('/', csrfProtection, async(req, res) => {
	const questions = await Question.findAll()

	res.render('questions', { questions });
});

router.get('/new', csrfProtection, async(req, res) => {
	const categories = await db.Category.findAll();
	const askQuestion = db.Question.build();
	// console.log(categories)
	res.render('ask-question', {
		categories,
		askQuestion,
		csrfToken: req.csrfToken(),
	});
});

const questionValidators = [
	check('title')
		.exists({ checkFalsy: true })
		.withMessage('Please enter your title.'),
	check('Question')
		.exists({ checkFalsy: true })
		.withMessage('Please enter your question.'),
];

router.post(
	'/',
	csrfProtection,
	questionValidators,
	asyncHandler(async (req, res) => {
		const { title, question, voteCount, categoryId, userId } = req.body;

		const categories = await db.Category.findAll();
		const askQuestion = db.Question.create({
			title,
			question,
			voteCount,
			categoryId,
			userId,

		});

		const validatorErrors = validationResult(req);

		if (validatorErrors.isEmpty()) {
			await askQuestion.save();
			loginUser(req, res, question);
			res.redirect('/questions');
		} else {
			const errors = validatorErrors.array().map((error) => error.msg);
			res.render('ask-question', {
				title: 'Register',
				categories,
				askQuestion,
				errors,
				csrfToken: req.csrfToken(),
			});
		}
	})
);
module.exports = router;
