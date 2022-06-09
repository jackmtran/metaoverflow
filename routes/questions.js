const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { loginUser, logoutUser, requireAuth, restoreUser } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');

const questionNotFoundError = (id) => {
  const err = Error(`Question with id ${id} not found.`);
  err.title = 'That question does not exist';
  err.status = 404;
  return err;
}

const questionValidators = [
	check('title')
		.exists({ checkFalsy: true })
		.withMessage('Please enter your title.'),
	check('question')
		.exists({ checkFalsy: true })
		.withMessage('Please enter your question.'),
];

router.get('/', csrfProtection, async(req, res) => {
	const questions = await db.Question.findAll()
	res.render('questions', { questions });
});

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const questionId = parseInt(req.params.id, 10);
  const question = await db.Question.findByPk(questionId);
	const answers = await db.Answer.findAll({
		where: { questionId }
	});
	let loggedInUser
	if (req.session.auth) {
			loggedInUser = req.session.auth.userId
	}
  if (question) {
    res.render('singleQuestion', { question, answers });
  } else {
    next(questionNotFoundError(questionId));
  };
}));

router.get('/new', csrfProtection, async(req, res) => {
	const categories = await db.Category.findAll();
	const askQuestion = db.Question.build();

	res.render('ask-question', {
		categories,
		askQuestion,
		csrfToken: req.csrfToken(),
	});
});


router.post( '/', csrfProtection, questionValidators, asyncHandler(async (req, res) => {
		const { title, question, voteCount, categoryId, userId } = req.body;

		const categories = await db.Category.findAll();
		const askQuestion = db.Question.build({
			title,
			question,
			voteCount,
			categoryId,
			userId,
		});

		const validatorErrors = validationResult(req);

		if (validatorErrors.isEmpty()) {
			await askQuestion.save();
			res.redirect('/');
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

router.put('/:id(\\d+)', questionValidators, asyncHandler(async (req, res, next) => {
	const questionId = parseInt(req.params.id, 10);
  const questions = await db.Question.findByPk(questionId);
  if (questions) {
    await questions.update({
			title: res.body.title,
			question: req.body.question,
		});
    res.json({ questions });
		res.redirect('/questions/:id')
  } else {
    next(questionNotFoundError);
  }
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
	console.log("test here")

	const questionId = parseInt(req.params.id, 10);
  const questions = await db.Question.findByPk(questionId);
			await questions.destroy();
			console.log('deleted')
			res.redirect('/questions')
}))

module.exports = router;
