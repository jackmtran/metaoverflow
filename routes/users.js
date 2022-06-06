const express = require('express');
const router = express.Router();
const { User, Post } = require('../db/models');
// const bcrypt = require('bcryptjs');
const csrf = require('csurf');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get(
  '/user/register',
  csrfProtection,
  asyncHandler(async (req, res) => {
      const user = await db.User.build();
      res.render('sign-up', {
          title: 'Sign-up',
          user,
          csrfToken: req.csrfToken(),
      });
  })
);

module.exports = router;
