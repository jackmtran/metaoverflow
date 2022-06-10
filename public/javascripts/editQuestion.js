const editBtns = document.querySelectorAll('.edit-btn')

for (let i = 0; i < editBtns.length; i++) {
    const btn = editBtns[i];

    btn.addEventListener('click', async(e) => {
        e.preventDefault()
        const questionId = e.target.id.split('-')[2]
        const title = document.getElementById(`${questionId}-edit-title`).value
        const question = document.getElementById(`${questionId}-edit-question`).value


        const res = await fetch(`/questions/${questionId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              title,
              question
          })
        })

        const data = await res.json()
        if (data.message === 'Success!') {
            const titleEle = document.getElementById(`${questionId}-title`)
            const questionEle = document.getElementById(`${questionId}-question`)
            titleEle.innerHTML = data.question.title
            questionEle.innerHTML = data.question.question
        }
    })
}
