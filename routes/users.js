const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth');
const { csrfProtection, asyncHandler, } = require('./utils');
const { check, validationResult } = require('express-validator');

const userValidators = [
	check('username')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for username')
		.isLength({ max: 50 })
		.withMessage('Username must not be more than 50 characters long'),
	check('email')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for Email Address')
		.isLength({ max: 255 })
		.withMessage('Email Address must not be more than 255 characters long')
		.isEmail()
		.withMessage('Email Address is not a valid email')
		.custom((value) => {
			return db.User.findOne({ where: { email: value } }).then((user) => {
				if (user) {
					return Promise.reject(
						'The provided Email Address is already in use by another account'
					);
				}
			});
		}),
	check('password')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for Password')
		.isLength({ max: 50 })
		.withMessage('Password must not be more than 50 characters long')
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
		.withMessage(
			'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
		),
	check('confirmPassword')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for Confirm Password')
		.isLength({ max: 50 })
		.withMessage('Confirm Password must not be more than 50 characters long')
		.custom((value, { req }) => {
			if (value !== req.body.password) {
				throw new Error('Confirm Password does not match Password');
			}
			return true;
		}),
];

const loginValidators = [
	check('username')
		.exists({ checkFalsy: true })
		.withMessage('Please enter your username.'),
	check('password')
		.exists({ checkFalsy: true })
		.withMessage('Please enter your password.'),
];

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const questionId = parseInt(req.params.id, 10);
	console.log(questionId);
  const question = await db.Question.findAll({
		where: { userId: questionId }
	});
    res.render('home', { question });
}));

router.get('/signup', csrfProtection, (req, res) => {
	const user = db.User.build();
	res.render('sign-up', {
		title: 'Sign Up',
		user,
		csrfToken: req.csrfToken(),
	});
});

router.get('/login', csrfProtection, (req, res) => {
	res.render('user-login', {
		title: 'Login',
		csrfToken: req.csrfToken(),
	});
});


router.post('/signup', csrfProtection, userValidators, asyncHandler(async (req, res) => {
		const { username, email, password } = req.body;

		const user = db.User.build({
			username,
			email,
		});

		const validatorErrors = validationResult(req);

		if (validatorErrors.isEmpty()) {
			const hashedPassword = await bcrypt.hash(password, 10);
			user.hashedPassword = hashedPassword;
			await user.save();
			loginUser(req, res, user);
			res.redirect('/');
		} else {
			const errors = validatorErrors.array().map((error) => error.msg);
			res.render('sign-up', {
				title: 'Sign Up',
				user,
				errors,
				csrfToken: req.csrfToken(),
			});
		}
	})
);

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
		const { username, password } = req.body;

		let errors = [];
		const validatorErrors = validationResult(req);

		if (validatorErrors.isEmpty()) {
			const user = await db.User.findOne({ where: { username } });
			if(username === 'Demo'){
				loginUser(req, res, user)
				return req.session.save(( ) => res.redirect('/')) //maybe
			}
			if (user !== null) {
				const passwordMatch = await bcrypt.compare(
					password,
					user.hashedPassword.toString()
				);
				if (passwordMatch) {
					loginUser(req, res, user);
					// return res.redirect('/');
					return req.session.save(( ) => res.redirect('/'))
				}
			}
			errors.push('Please enter a valid username and password.');
		} else {
			errors = validatorErrors.array().map((error) => error.msg);
		}

		res.render('user-login', {
			title: 'Login',
			username,
			errors,
			csrfToken: req.csrfToken(),
		});
	})
);

router.post('/logout', (req, res) => {
	logoutUser(req, res);
	res.redirect('/');
});

module.exports = router;
