const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { loginUser, logoutUser, requireAuth, restoreUser } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');


router.get('/', csrfProtection, async(req, res) => {
	const questions = await db.Question.findAll()
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
	check('question')
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

// router.delete('/:id(\\d+)', async(req, res) => {
// 	// console.log('you have arrived at the delete route handler')
// 	const post = await db.Question.findByPk(req.question.id)
// 	await post.destroy()

// 	res.json({message: 'Success!'})
// })

// router.delete(
// 	'/:id(\\d+)/delete',
// 	csrfProtection,
// 	requireAuth,
// 	restoreUser,
// 	asyncHandler(async (req, res) => {
// 			const questionId = parseInt(req.params.id, 10);
// 			const question = await db.Question.findByPk(questionId);

// 			checkPermissions(question, res.locals.user);
// 			await question.destroy();
// 			res.redirect('/');
// 	})
// );
// router.delete('/'), async(req, res) => {
// 	const question = await db.Question.findOne(req.title)
// 	await question.destroy({
// 			where: {
// 					title
// 			}
// 	});
// 	res.redirect('/');
// }

router.put('/'), async(req, res) => {
	const { id } = req.body;
	const { title, question, categoryId, userId, voteCount } = req.body;
	const questionUpdate = await Question.update({
			title,
			question,
			categoryId,
			userId,
			voteCount
	}, {
			where: {
					id
			}
	});
	res.redirect('/');
}

module.exports = router;
