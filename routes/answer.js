const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', csrfProtection, asyncHandler (async(req, res) => {
	res.render('answer', { csrfToken: req.csrfToken()});
}));


router.post( '/:id(\\d+)', asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const { answer } = await req.body
    const addAnswer = db.Answer.build({
        answer: answer,
        voteCount: 0,
        userId: 1,
        questionId: questionId
    });

    await addAnswer.save();
	// res.redirect(`/questions/${questionId}`);
 })
);

router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await db.Answer.findByPk(answerId);
        await answer.destroy();
}))

module.exports = router;
