const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', csrfProtection, asyncHandler (async(req, res) => {
	res.render('answer', { csrfToken: req.csrfToken()});
}));


router.post( '/', csrfProtection, asyncHandler(async (req, res) => {
    console.log(req.body);
    const { answer } = await req.body
    const addAnswer = db.Answer.build({
        answer: answer,
        voteCount: 0,
        userId: 1,
        questionId: 1
    });

    await addAnswer.save();
	    res.redirect('/questions');
})
);

module.exports = router;
