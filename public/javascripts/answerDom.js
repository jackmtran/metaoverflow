window.addEventListener('DOMContentLoaded', (e) => {
    const answerBtn = document.getElementById('Answer-submit-btn');

    answerBtn.addEventListener('click', async(e) => {
        const answerForm = document.getElementById('Answer-submit-form');
        const answerNum = document.getElementsByClassName('answer-btn')[0].id;
        const answerId = answerNum.split('-');
        const questionId = parseInt(answerId[answerId.length - 1], 10)
        console.log(answerForm.value, questionId)

        const res = await fetch(`/answer/${questionId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                answer: answerForm.value,
            })
        })
        
    })
})
