const db = require('./db/models');
const session = require('express-session');


const loginUser = (req, res, user) => {
	req.session.authenticated = {
		userId: user.id,
	};
};

const restoreUser = async (req, res, next) => {

	if (session.auth) {
		const { userId } = req.session.authenticated;

		try {
			const user = await db.User.findByPk(userId);

			if (user) {
				res.locals.authenticated = true;
				res.locals.user = user;
				next();
			}
		} catch (err) {
			res.locals.authenticated = false;
			next(err);
		}
	} else {
		res.locals.authenticated = false;
		next();
	}
};

const logoutUser = (req, res) => {
	delete req.session.authenticated;
};

const requireAuth = (req, res, next) => {
	if (!res.locals.authenticated) {
		return res.redirect('/login');
	}
	return next();
};

module.exports = {
	loginUser,
	restoreUser,
	logoutUser,
	requireAuth,
};
