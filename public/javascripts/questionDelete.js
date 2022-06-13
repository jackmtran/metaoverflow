const deleteBtns = document.querySelectorAll('.delete-btn')

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];

    btn.addEventListener('click', async(e) => {
        const questionId = e.target.id.split('-')[2]
        const res = await fetch(`/questions/${questionId}`, {
            method: 'DELETE'
        })
        if (res) {
            window.location.href=('/questions')
        }
    })
}
