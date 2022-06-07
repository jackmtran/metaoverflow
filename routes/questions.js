const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');

router.get('/', csrfProtection, (req, res) => {
	res.render('questions', { title: 'questions'});
});

router.get('/new', csrfProtection, (req, res) => {
	const question = db.Question.build();
	res.render('ask-question', {
		title: 'New Question',
    question,
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
	'/new',
	csrfProtection,
	questionValidators,
	asyncHandler(async (req, res) => {
		const { title, question } = req.body;

		const questions = db.Question.build({
			title,
			question,
		});

		const validatorErrors = validationResult(req);

		if (validatorErrors.isEmpty()) {
			await questions.save();
			loginUser(req, res, user);
			res.redirect('/');
		} else {
			const errors = validatorErrors.array().map((error) => error.msg);
			res.render('sign-up', {
				title: 'Register',
				user,
				errors,
				csrfToken: req.csrfToken(),
			});
		}
	})
);
module.exports = router;
