const editBtns = document.querySelectorAll('.edit-btn')

for (let i = 0; i < editBtns.length; i++) {
    const btn = editBtns[i];
    btn.addEventListener('click', (e) => {
        const questionId = e.target.id.split('-')[2]
        const form = document.getElementById(`edit-form-${questionId}`)
        if (form.classList.contains('hidden')) {
            form.classList.remove('hidden')
        } else {
            form.classList.add('hidden')
        }

        const submitBtn = document.getElementById(`edit-submit-${questionId}`)
        submitBtn.addEventListener('click', async (submitEvent) => {
            submitEvent.preventDefault()
            const title = document.getElementById(`${questionId}-edit-title`).value
            const question = document.getElementById(`${questionId}-edit-question`).value

            console.log(title, content)

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
                // console.log(data)
                const titleEle = document.getElementById(`${postId}-title`)
                const contentEle = document.getElementById(`${postId}-content`)
                titleEle.innerHTML = data.post.title
                contentEle.innerHTML = data.post.content
                form.classList.add('hidden')
            } else {
                // create elements with error message
            }
        })

    })
}
